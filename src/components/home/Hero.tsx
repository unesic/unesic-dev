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
	mode: "dark" | "light";
	headerRef: React.MutableRefObject<HTMLDivElement>;
}

export const Hero = React.forwardRef<HTMLDivElement, HeroProps>(
	({ mode, headerRef }, ref) => {
		const [maxH, setMaxH] = useState<number>();

		useEffect(() => {
			const headerH = headerRef.current?.getBoundingClientRect().height;
			const newMaxH = window.innerHeight - headerH;
			setMaxH(newMaxH);
		}, [headerRef]);

		return (
			<Container
				ref={ref}
				id="hero"
				maxW={[
					"100%",
					"container.sm",
					"container.md",
					"container.lg",
					"container.xl",
					"container.xl",
				]}
				pt="40"
			>
				<Grid
					templateColumns="repeat(12, 1fr)"
					maxH={[
						"max-content",
						"max-content",
						"max-content",
						`${maxH}px`,
						`${maxH}px`,
						`${maxH}px`,
					]}
					h={["auto", "auto", "auto", "100vh", "100vh", "100vh"]}
				>
					<GridItem
						colSpan={[12, 12, 12, 6, 6, 6]}
						textAlign={["center", "center", "center", "left", "left", "left"]}
					>
						<Code>Hi, my name is</Code>
						<Heading variant="h1" as="h1">
							Uroš Nešić.
						</Heading>
						<Heading variant="h2" as="h2">
							I make web go brrr.
						</Heading>
						<Text
							mt="4"
							mx={["auto", "auto", "auto", "0", "0", "0"]}
							maxW={["22rem", "22rem", "22rem", "24rem", "100%", "100%"]}
						>
							A software engineer specializing in full-stack web development
							with primary focus on the front-end technologies.
						</Text>
						<Button mt="12">Get to know me!</Button>
					</GridItem>
					<GridItem colSpan={[12, 12, 12, 4, 4, 4]}>
						<Image
							src={mode == "dark" ? fullDark : fullLight}
							alt="Character using laptop"
							ml="auto"
							mr={["auto", "auto", "auto", "0", "0", "0"]}
						/>
					</GridItem>
				</Grid>
			</Container>
		);
	}
);
