/**
 * React
 */
import React, { useEffect, useState } from "react";

/**
 * Chakra UI components
 */
import {
	Container,
	Grid,
	GridItem,
	Heading,
	Text,
	Code,
	Button,
	Image,
} from "@chakra-ui/react";

/**
 * Images
 */
import fullDark from "../../images/illo-full-dark.svg";
import fullLight from "../../images/illo-full-light.svg";

interface HeroProps {
	colorMode: "dark" | "light";
	headerRef: React.MutableRefObject<HTMLDivElement>;
}

export const Hero: React.FC<HeroProps> = ({ colorMode, headerRef }) => {
	const [maxH, setMaxH] = useState<number>();

	useEffect(() => {
		const headerH = headerRef.current?.getBoundingClientRect().height;
		const newMaxH = window.innerHeight - headerH;
		setMaxH(newMaxH);
	}, [headerRef]);

	return (
		<Container id="hero" maxW="container.xl">
			<Grid
				templateColumns="repeat(12, 1fr)"
				maxH={`${maxH}px`}
				h="100vh"
				pt="40"
			>
				<GridItem colSpan={6}>
					<Code>Hi, my name is</Code>
					<Heading variant="h1" as="h1">
						Uroš Nešić.
					</Heading>
					<Heading variant="h2" as="h2">
						I make web go brrr.
					</Heading>
					<Text mt="4">
						A software engineer specializing in full-stack web development with
						primary focus on the front-end technologies.
					</Text>
					<Button mt="12">Get to know me!</Button>
				</GridItem>
				<GridItem colSpan={4}>
					<Image
						src={colorMode == "dark" ? fullDark : fullLight}
						alt="Character using laptop"
						ml="auto"
					/>
				</GridItem>
			</Grid>
		</Container>
	);
};
