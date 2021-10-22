import React, { useCallback, useEffect, useState } from "react";

import { Container, Flex, Box, HStack } from "@chakra-ui/react";
import { Kbd, Tooltip } from "@chakra-ui/react";
import { useBoolean } from "@chakra-ui/react";

import { MenuItem } from "components/MenuItem";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
	const [metaKey, setMetaKey] = useBoolean();
	const [secondKey, setSecondKey] = useState<string>();

	useEffect(() => {
		document.body.addEventListener("keydown", onKeyDown);
		document.body.addEventListener("keyup", onKeyUp);

		return () => {
			document.body.removeEventListener("keydown", onKeyDown);
			document.body.removeEventListener("keyup", onKeyUp);
		};
	}, []);

	useEffect(() => {
		if (!(metaKey && secondKey)) return;
		// Scroll to specific section
		console.log(secondKey);
	}, [metaKey, secondKey]);

	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (!e.metaKey) return;

		setMetaKey.on();

		const options = "bejouh".split("");
		const char = e.key.toLowerCase();

		if (!options.includes(char)) return;
		e.preventDefault();
		setSecondKey(char);
	}, []);

	const onKeyUp = useCallback((e: KeyboardEvent) => {
		if (!e.metaKey) setMetaKey.off();
		setSecondKey(undefined);
	}, []);

	return (
		<Container maxW="container.xl">
			<Flex as="nav" align="center" justify="space-between" wrap="wrap" py={8}>
				<Box></Box>
				<Box>
					<HStack spacing={4} align="center" justify="end">
						<Tooltip
							placement="auto"
							label="Use ⌘ + underlined character combination to quickly navigate."
						>
							<Kbd
								variant={metaKey ? "press" : undefined}
								onMouseEnter={setMetaKey.on}
								onMouseLeave={setMetaKey.off}
							>
								⌘
							</Kbd>
						</Tooltip>
						<HStack spacing={1}>
							<MenuItem href="#" char={1} on={metaKey}>
								About
							</MenuItem>
							<MenuItem href="#" char={3} on={metaKey}>
								Experience
							</MenuItem>
							<MenuItem href="#" char={3} on={metaKey}>
								Projects
							</MenuItem>
							<MenuItem href="#" char={1} on={metaKey}>
								Contact
							</MenuItem>
						</HStack>

						<MenuItem href="#" char={3} on={metaKey} isBtn>
							Resume
						</MenuItem>
					</HStack>
				</Box>
			</Flex>
		</Container>
	);
};
