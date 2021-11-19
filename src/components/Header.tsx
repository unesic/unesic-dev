/**
 * React
 */
import React, {
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";

/**
 * Utilities and types
 */
import { useTranslation } from "lib/hooks/useTranslation";
import { DivRef } from "pages";
import { NavItem } from "lib/types/language.types";

/**
 * Components
 */
import { MenuItem } from "components/MenuItem";
import { ResumePopup } from "components/ResumePopup";

/**
 * Chakra UI components
 */
import {
	Container,
	Flex,
	Box,
	Stack,
	HStack,
	Image,
	Button,
	Kbd,
	Tooltip,
	Link,
	useBoolean,
	useMediaQuery,
	useColorMode,
	useColorModeValue,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

/**
 * Images
 */
import head_dark from "../images/illo-head-dark.svg";
import head_light from "../images/illo-head-light.svg";
import { Switch } from "./Switch";
import { LanguageContext, Language } from "lib/LanguageContext";

enum Platform {
	MAC = "MAC",
	WIN = "WIN",
}

interface HeaderProps {
	refs: { [section: string]: DivRef };
}

export const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
	({ refs }, ref) => {
		const { colorMode, toggleColorMode } = useColorMode();
		const modeIcon = useColorModeValue("feather:sun", "feather:moon");
		const headerImage = useColorModeValue(head_light, head_dark);

		const _t = useTranslation("header");

		const { language, toggleLanguage } = useContext(LanguageContext);
		const [secondKey, setSecondKey] = useState<string>();
		const menuRef = useRef() as React.MutableRefObject<HTMLDivElement>;

		const [isDesktop] = useMediaQuery("(min-width: 62em)");
		const [mobileMenu, setMobileMenu] = useBoolean();
		const [navKey, setNavKey] = useBoolean();

		const platform: Platform = useMemo(() => {
			const userAgent = window.navigator.userAgent;

			const isWin = userAgent.includes("Windows");
			const isMac = userAgent.includes("Mac");

			if (isWin) return Platform.WIN;
			if (isMac) return Platform.MAC;

			return Platform.WIN;
		}, [window.navigator.userAgent]);

		const menuStyles = useMemo(
			() =>
				!isDesktop
					? {
							position: "absolute" as any,
							top: "100%",
							left: "0",
							align: "center",
							opacity: mobileMenu ? "1" : "0",
							visibility: (mobileMenu ? "visible" : "hidden") as any,
							marginInlineStart: "0 !important",
							p: "4",
							width: "100%",
							bg: `app.${colorMode}.dusk.300`,
							transition: "all 0.2s ease-out 0s",
					  }
					: {},
			[isDesktop, mobileMenu, menuRef, colorMode]
		);

		useEffect(() => {
			if (!isDesktop) return;
			document.body.addEventListener("keydown", onKeyDown);
			document.body.addEventListener("keyup", onKeyUp);

			return () => {
				document.body.removeEventListener("keydown", onKeyDown);
				document.body.removeEventListener("keyup", onKeyUp);
			};
		}, [isDesktop]);

		useEffect(() => {
			if (!isDesktop) return;
			if (!(navKey && secondKey)) return;

			const section = _t.nav.find((s) => s.nav.char === secondKey);
			if (!section?.id) return;

			refs[section.id].current.scrollIntoView({
				block: "start",
				behavior: "smooth",
			});
		}, [navKey, secondKey]);

		const onKeyDown = useCallback(
			(e: KeyboardEvent) => {
				if (platform === Platform.MAC && !e.metaKey) return;
				if (platform === Platform.WIN && !e.ctrlKey) return;

				setNavKey.on();

				const options = _t.nav.map((s) => s.nav.char);
				const char = e.key.toUpperCase();

				if (!options.includes(char)) return;
				e.preventDefault();
				setSecondKey(char);
			},
			[platform, _t]
		);

		const onKeyUp = useCallback(
			(e: KeyboardEvent) => {
				if (platform === Platform.MAC && !e.metaKey) setNavKey.off();
				if (platform === Platform.WIN && !e.ctrlKey) setNavKey.off();

				setSecondKey(undefined);
			},
			[platform]
		);

		const handleMenuItemClick = useCallback(
			(e: React.MouseEvent<any>, s?: NavItem) => {
				if (s?.id) {
					e.preventDefault();
					refs[s.id].current.scrollIntoView({
						block: "start",
						behavior: "smooth",
					});
				}
				setMobileMenu.off();
			},
			[]
		);

		return (
			<Container
				maxW="container.xl"
				ref={ref}
				position={isDesktop ? "relative" : "fixed"}
				top={isDesktop ? "unset" : "0"}
				bg={!isDesktop ? `app.${colorMode}.dusk.300` : "none"}
				zIndex="10"
			>
				<Flex
					as="nav"
					align="center"
					justify="space-between"
					wrap="wrap"
					py={[2, 2, 2, 8]}
				>
					<Box>
						<Link href="#" onClick={(e) => handleMenuItemClick(e, _t.nav[1])}>
							<Image
								src={headerImage}
								alt="Character head"
								maxW={["4rem", "4rem", "4rem", "4rem", "unset"]}
							/>
						</Link>
					</Box>
					<Box ml={["4", "4", "4", "8"]}>
						<Switch
							active={colorMode === "light"}
							icon={<Icon icon={modeIcon} />}
							onToggle={toggleColorMode}
						/>
					</Box>

					<Box mr="auto" ml={["4", "4", "4", "4"]}>
						<Switch
							active={language === Language.SR}
							icon={language.toUpperCase()}
							onToggle={toggleLanguage}
							fontSize="sm"
						/>
					</Box>
					<Box>
						<HStack spacing={4} alignItems="center" justify="end">
							{isDesktop ? (
								<Tooltip
									placement="auto"
									label={`Use ${
										platform === Platform.MAC ? "⌘ (command)" : "⌃ (control)"
									} + underlined character combination to quickly.`}
									bg={`app.${colorMode}.dusk.200`}
									hasArrow
								>
									<Kbd
										variant={navKey ? "press" : undefined}
										onMouseEnter={setNavKey.on}
										onMouseLeave={setNavKey.off}
									>
										{platform === Platform.MAC ? "⌘" : "⌃"}
									</Kbd>
								</Tooltip>
							) : (
								<>
									<ResumePopup />
									<Button onClick={setMobileMenu.toggle}>
										<Icon icon="feather:menu" />
									</Button>
								</>
							)}
							<Stack
								ref={menuRef}
								spacing={isDesktop ? 1 : 4}
								direction={["column", "column", "column", "row"]}
								{...menuStyles}
							>
								{_t.nav.map((s) =>
									s.label ? (
										<MenuItem
											key={s.id}
											char={s.nav.num}
											on={navKey}
											isBtn={s.isBtn}
											href={s.url ?? `#${s.id}`}
											target={s.url ? "_blank" : ""}
											onClick={(e) => handleMenuItemClick(e, s)}
										>
											{s.label}
										</MenuItem>
									) : null
								)}
							</Stack>
							{isDesktop && <ResumePopup />}
						</HStack>
					</Box>
				</Flex>
			</Container>
		);
	}
);
