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

interface HeaderProps {
	colorMode: "dark" | "light";
}

enum Platform {
	MAC,
	WIN,
}

export const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
	({ colorMode }, ref) => {
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

		const sections: { [key: string]: string } = useMemo(
			() => ({
				B: "about",
				E: "experience",
				J: "projects",
				O: "contact",
				U: "resume",
				H: "hero",
			}),
			[]
		);

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
			// Scroll to specific section
			console.log(secondKey);
			document
				.getElementById(sections[secondKey])
				?.scrollIntoView({ block: "start", behavior: "smooth" });
		}, [navKey, secondKey]);

		const onKeyDown = useCallback((e: KeyboardEvent) => {
			if (platform === Platform.MAC && !e.metaKey) return;
			if (platform === Platform.WIN && !e.ctrlKey) return;

			setNavKey.on();

			const options = "BEJOUH".split("");
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
							src={colorMode === "dark" ? headDark : headLight}
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
								<MenuItem href="#" char={1} on={navKey}>
									About
								</MenuItem>
								<MenuItem href="#" char={3} on={navKey}>
									Experience
								</MenuItem>
								<MenuItem href="#" char={3} on={navKey}>
									Projects
								</MenuItem>
								<MenuItem href="#" char={1} on={navKey}>
									Contact
								</MenuItem>
							</HStack>

							<MenuItem href="#" char={3} on={navKey} isBtn>
								Resume
							</MenuItem>
						</HStack>
					</Box>
				</Flex>
			</Container>
		);
	}
);
