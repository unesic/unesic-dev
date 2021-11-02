/**
 * React
 */
import React, {
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";

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
	useBoolean,
	useMediaQuery,
	Link,
} from "@chakra-ui/react";

/**
 * Custom components
 */
import { MenuItem } from "components/MenuItem";

/**
 * Images
 */
import headDark from "../images/illo-head-dark.svg";
import headLight from "../images/illo-head-light.svg";
import { DivRef } from "pages";
import { Icon } from "@iconify/react";

type MenuItemsT = {
	id: string;
	label?: string;
	nav: {
		num: number;
		char: string;
	};
	ref?: DivRef;
	isBtn?: boolean;
	url?: string;
};

enum Platform {
	MAC,
	WIN,
}

interface HeaderProps {
	mode: "dark" | "light";
	toggleMode: () => void;
	menuItems: MenuItemsT[];
}

export const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
	({ mode, toggleMode, menuItems }, ref) => {
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
							width: "100%",
							opacity: mobileMenu ? "1" : "0",
							visibility: (mobileMenu ? "visible" : "hidden") as any,
							transition: "all 0.2s ease-out 0s",
							marginInlineStart: "0 !important",
							bg: `app.${mode}.dusk.300`,
							px: "8",
							pb: "8",
							align: "center",
					  }
					: {},
			[isDesktop, mobileMenu, menuRef, mode]
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
			const section = menuItems.find((s) => s.nav.char === secondKey);
			section?.ref?.current.scrollIntoView({
				block: "start",
				behavior: "smooth",
			});
		}, [navKey, secondKey]);

		const onKeyDown = useCallback(
			(e: KeyboardEvent) => {
				if (platform === Platform.MAC && !e.metaKey) return;
				if (platform === Platform.WIN && !e.ctrlKey) return;

				setNavKey.on();

				const options = menuItems.map((s) => s.nav.char);
				const char = e.key.toUpperCase();

				if (!options.includes(char)) return;
				e.preventDefault();
				setSecondKey(char);
			},
			[platform]
		);

		const onKeyUp = useCallback(
			(e: KeyboardEvent) => {
				if (platform === Platform.MAC && !e.metaKey) setNavKey.off();
				if (platform === Platform.WIN && !e.ctrlKey) setNavKey.off();

				setSecondKey(undefined);
			},
			[platform]
		);

		const handleMenuItemClick = useCallback((e: MouseEvent, s: MenuItemsT) => {
			if (s.ref) {
				e.preventDefault();
				s.ref?.current.scrollIntoView({
					block: "start",
					behavior: "smooth",
				});
			}
			setMobileMenu.off();
		}, []);

		return (
			<Container
				maxW="container.xl"
				ref={ref}
				position={isDesktop ? "relative" : "fixed"}
				top={isDesktop ? "unset" : "0"}
				bg={!isDesktop ? `app.${mode}.dusk.300` : "none"}
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
						<Link
							href="#"
							onClick={(e: any) => handleMenuItemClick(e, menuItems[1])}
						>
							<Image
								src={mode === "dark" ? headDark : headLight}
								alt="Character head"
								maxW={["4rem", "4rem", "4rem", "4rem", "unset"]}
							/>
						</Link>
					</Box>
					<Box mr="auto" ml={["4", "4", "4", "8"]}>
						<Button variant="colorMode" onClick={toggleMode}>
							<Box
								as="span"
								transition="all 0.2s ease-out 0s"
								bg={`app.${mode}.dusk.300`}
								borderRadius="full"
								p="1"
								translateX={mode === "dark" ? "100%" : "0"}
								transform="auto"
							>
								<Icon icon={`feather:${mode === "light" ? "sun" : "moon"}`} />
							</Box>
						</Button>
					</Box>
					<Box>
						<HStack spacing={4} alignItems="center" justify="end">
							{isDesktop ? (
								<Tooltip
									placement="auto"
									label={`Use ${
										platform === Platform.MAC ? "⌘ (command)" : "⌃ (control)"
									} + underlined character combination to quickly.`}
									bg={`app.${mode}.dusk.200`}
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
								<Button onClick={setMobileMenu.toggle}>
									<Icon icon="feather:menu" />
								</Button>
							)}
							<Stack
								ref={menuRef}
								spacing={isDesktop ? 1 : 4}
								direction={["column", "column", "column", "row"]}
								{...menuStyles}
							>
								{menuItems.map((s) =>
									s.label ? (
										<MenuItem
											key={s.id}
											char={s.nav.num}
											on={navKey}
											isBtn={s.isBtn}
											href={s.url ?? `#${s.id}`}
											target={s.url ? "_blank" : ""}
											onClick={(e: MouseEvent) => handleMenuItemClick(e, s)}
										>
											{s.label}
										</MenuItem>
									) : null
								)}
							</Stack>
						</HStack>
					</Box>
				</Flex>
			</Container>
		);
	}
);
