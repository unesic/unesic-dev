import React from "react";

import { Container } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Heading, Text, Code, Button } from "@chakra-ui/react";

interface HeroProps {}

export const Hero: React.FC<HeroProps> = ({}) => {
	return (
		<Container maxW="container.xl">
			<Grid templateColumns="repeat(12, 1fr)" pt="28" minH="100vh">
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
				<GridItem colSpan={4}></GridItem>
			</Grid>
		</Container>
	);
};
