import React from "react";

import { Container } from "@chakra-ui/react";
import { Grid, GridItem, List, ListItem } from "@chakra-ui/react";
import { Heading, Text, Code } from "@chakra-ui/react";

import { useColorMode } from "@chakra-ui/react";

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
	const { colorMode } = useColorMode();

	return (
		<Container maxW="container.xl" px="12" py="32">
			<Code>Who the hell is this guy?</Code>
			<Heading variant="h3" as="h3">
				About me.
			</Heading>
			<Grid templateColumns="repeat(12, 1fr)" gap="20">
				<GridItem colSpan={7}>
					<Text marginTop="4">
						We might’ve gotten off on the wrong foot, so allow me to properly
						introduce myself. Hi, my name is Uroš Nešić, I’m 279 months old and
						I enjoy building things for the web!
					</Text>
					<Text marginTop="4">
						Fueled by undoubtedly weird sense of humor and lots of coffee
						(mostly the latter), I spend most of my waking hours looking for
						interesting project ideas and ways to leave my mark on the ethereal
						thing that is the Internet.
					</Text>
					<Text marginTop="4">
						Here are a few technologies I’ve been working with lately:
					</Text>
					<Grid templateColumns="repeat(2, 1fr)" marginTop="5">
						<List spacing="2">
							<ListItem>JavaScript (ES6+)</ListItem>
							<ListItem>TypeScript</ListItem>
							<ListItem>React</ListItem>
							<ListItem>Redux</ListItem>
						</List>
						<List spacing="2">
							<ListItem>Node.js</ListItem>
							<ListItem>express.js</ListItem>
							<ListItem>GraphQL</ListItem>
							<ListItem>Mongoose</ListItem>
						</List>
					</Grid>
				</GridItem>
				<GridItem
					colSpan={5}
					bg={`app.${colorMode}.dusk.100`}
					opacity="0.2"
					borderRadius="8"
				></GridItem>
			</Grid>
		</Container>
	);
};
