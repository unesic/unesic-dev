/**
 * React
 */
import React, { useCallback, useEffect, useMemo, useState } from "react";

/**
 * Chakra UI components
 */
import {
	Container,
	Flex,
	Box,
	HStack,
	Image,
	Kbd,
	Tooltip,
	useBoolean,
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

type SectionT = {
	id: string;
	label?: string;
	nav: {
		num: number;
		char: string;
	};
	ref: DivRef;
};

enum Platform {
	MAC,
	WIN,
}

interface HeaderProps {
	mode: "dark" | "light";
	sections: SectionT[];
}

export const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
	({ mode, sections }, ref) => {
		const [navKey, setNavKey] = useBoolean();
		const [secondKey, setSecondKey] = useState<string>();

		const platform: Platform = useMemo(() => {
			const userAgent = window.navigator.userAgent;

			const isWin = userAgent.includes("Windows");
			const isMac = userAgent.includes("Mac");

			if (isWin) return Platform.WIN;
			if (isMac) return Platform.MAC;

			return Platform.WIN;
		}, []);

		useEffect(() => {
			document.body.addEventListener("keydown", onKeyDown);
			document.body.addEventListener("keyup", onKeyUp);

			return () => {
				document.body.removeEventListener("keydown", onKeyDown);
				document.body.removeEventListener("keyup", onKeyUp);
			};
		}, []);

		useEffect(() => {
			if (!(navKey && secondKey)) return;
			const section = sections.find((s) => s.nav.char === secondKey);
			section?.ref.current.scrollIntoView({
				block: "start",
				behavior: "smooth",
			});
		}, [navKey, secondKey]);

		const onKeyDown = useCallback((e: KeyboardEvent) => {
			if (platform === Platform.MAC && !e.metaKey) return;
			if (platform === Platform.WIN && !e.ctrlKey) return;

			setNavKey.on();

			const options = sections.map((s) => s.nav.char);
			const char = e.key.toUpperCase();

			if (!options.includes(char)) return;
			e.preventDefault();
			setSecondKey(char);
		}, []);

		const onKeyUp = useCallback((e: KeyboardEvent) => {
			if (platform === Platform.MAC && !e.metaKey) setNavKey.off();
			if (platform === Platform.WIN && !e.ctrlKey) setNavKey.off();

			setSecondKey(undefined);
		}, []);

		return (
			<Container maxW="container.xl" ref={ref}>
				<Flex
					as="nav"
					align="center"
					justify="space-between"
					wrap="wrap"
					py={8}
				>
					<Box>
						<Image
							src={mode === "dark" ? headDark : headLight}
							alt="Character head"
						/>
					</Box>
					<Box>
						<HStack spacing={4} align="center" justify="end">
							<Tooltip
								placement="auto"
								label={`Use ${
									platform === Platform.MAC ? "⌘ (command)" : "⌃ (control)"
								} + underlined character combination to quickly.`}
							>
								<Kbd
									variant={navKey ? "press" : undefined}
									onMouseEnter={setNavKey.on}
									onMouseLeave={setNavKey.off}
								>
									{platform === Platform.MAC ? "⌘" : "⌃"}
								</Kbd>
							</Tooltip>
							<HStack spacing={1}>
								{sections.map((s) =>
									s.label ? (
										<MenuItem key={s.id} char={s.nav.num} on={navKey}>
											{s.label}
										</MenuItem>
									) : null
								)}
							</HStack>

							<MenuItem char={3} on={navKey} isBtn>
								Resume
							</MenuItem>
						</HStack>
					</Box>
				</Flex>
			</Container>
		);
	}
);
