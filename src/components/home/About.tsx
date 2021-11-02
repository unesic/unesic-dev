import React, { useMemo } from "react";

import {
	Container,
	Grid,
	GridItem,
	List,
	ListItem,
	Heading,
	Text,
	Code,
} from "@chakra-ui/react";

interface AboutProps {
	mode: "dark" | "light";
}

export const About = React.forwardRef<HTMLDivElement, AboutProps>(
	({ mode }, ref) => {
		const monthDiff = useMemo(() => {
			const birthday = new Date(1998, 7, 1);
			const today = new Date();
			const months = today.getMonth() - birthday.getMonth();
			const years = today.getFullYear() - birthday.getFullYear();

			return months + years * 12 + 1;
		}, []);

		return (
			<Container
				ref={ref}
				id="about"
				maxW={[
					"100%",
					"container.sm",
					"container.md",
					"container.lg",
					"container.xl",
					"container.xl",
				]}
				px="12"
				py="32"
			>
				<Code>Who the hell is this guy?</Code>
				<Heading variant="h3" as="h3">
					About me.
				</Heading>
				<Grid
					templateColumns="repeat(12, 1fr)"
					gap={["0", "0", "0", "20", "20", "20"]}
				>
					<GridItem colSpan={[12, 12, 12, 7, 7, 7]}>
						<Text marginTop="4">
							We might’ve gotten off on the wrong foot, so allow me to properly
							introduce myself. Hi, my name is Uroš Nešić, I’m {monthDiff}{" "}
							months old and I enjoy building things for the web!
						</Text>
						<Text marginTop="4">
							Fueled by undoubtedly weird sense of humor and lots of coffee
							(mostly the latter), I spend most of my waking hours looking for
							interesting project ideas and ways to leave my mark on the
							ethereal thing that is the Internet.
						</Text>
						<Text marginTop="4">
							Here are a few technologies I’ve been working with lately:
						</Text>
						<Grid
							templateColumns={[
								"repeat(1, 1fr)",
								"repeat(1, 1fr)",
								"repeat(2, 1fr)",
								"repeat(2, 1fr)",
								"repeat(2, 1fr)",
								"repeat(2, 1fr)",
							]}
							gap="2"
							marginTop="5"
						>
							<List spacing="2" className="tech-list">
								<ListItem>JavaScript (ES6+)</ListItem>
								<ListItem>TypeScript</ListItem>
								<ListItem>React</ListItem>
								<ListItem>Redux</ListItem>
							</List>
							<List spacing="2" className="tech-list">
								<ListItem>Node.js</ListItem>
								<ListItem>express.js</ListItem>
								<ListItem>GraphQL</ListItem>
								<ListItem>Mongoose</ListItem>
							</List>
						</Grid>
					</GridItem>
					<GridItem
						colSpan={[12, 10, 10, 5, 5, 5]}
						colStart={[1, 2, 2, "auto", "auto", "auto"]}
						minH={["20rem", "20rem", "25rem", "100%", "100%", "100%"]}
						bg={`app.${mode}.dusk.100`}
						opacity="0.2"
						borderRadius="8"
					></GridItem>
				</Grid>
			</Container>
		);
	}
);
