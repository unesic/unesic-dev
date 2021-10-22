import React from "react";

import { Container, Box } from "@chakra-ui/react";
import { Heading, Text, Code, Button } from "@chakra-ui/react";

interface ContactProps {
	colorMode: "dark" | "light";
}

export const Contact: React.FC<ContactProps> = ({}) => {
	return (
		<Container id="contact" maxW="container.md" py="40">
			<Box px="4" textAlign="center">
				<Code>He's okay I guess...</Code>
				<Heading variant="h3" as="h3">
					Get in touch.
				</Heading>
				<Text mt="4">
					Whether you have a question, looking to hire or you have a project
					idea for the next billion dollar unicorn that will take us to the
					moon. Stop by and say hi and I’ll do my best not to ghost you or leave
					you hanging for too long!
				</Text>
				<Button mt="12">Email me</Button>
			</Box>
		</Container>
	);
};
