import React from "react";

import { Container, Box, VStack, HStack } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Heading, Text, Code, Link } from "@chakra-ui/react";

import { useColorMode } from "@chakra-ui/react";

import { Icon } from "@iconify/react";

interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = ({}) => {
	const { colorMode } = useColorMode();

	return (
		<Container maxW="container.xl" py="32">
			<Code>Has he got anything to show?</Code>
			<Heading variant="h3" as="h3">
				My latest creations.
			</Heading>
			<Grid templateColumns="repeat(12, 1fr)" mt="16">
				<GridItem
					gridColumn="1 / 7"
					gridRow="1 / -1"
					bg={`app.${colorMode}.dusk.100`}
					opacity="0.2"
					borderRadius="8"
				></GridItem>
				<GridItem
					gridColumn="6 / -1"
					gridRow="1 / -1"
					textAlign="right"
					zIndex="1"
					position="relative"
				>
					<Text variant="tech" color={`app.${colorMode}.accent.solid`}>
						Full-stack project
					</Text>
					<Heading variant="h4" as="h4">
						Boleskine
					</Heading>
					<Box p="4" bg={`app.${colorMode}.dusk.200`} borderRadius="8" mt="8">
						<Text>
							Note taking and expense tracking application with a handy overview
							on weekly and monthly income/expense totals accompanied by an
							analytics graph that provides a more through insight. Authenticate
							with a simple email/password combination or using social media.
						</Text>
					</Box>
					<VStack spacing="3" align="end" mt="8">
						<HStack spacing="5">
							<Text variant="tech">React</Text>
							<Text variant="tech">TypeScript</Text>
							<Text variant="tech">Redux</Text>
							<Text variant="tech">Router</Text>
							<Text variant="tech">Formik</Text>
							<Text variant="tech">TailwindCSS</Text>
						</HStack>
						<HStack spacing="5">
							<Text variant="tech">Express</Text>
							<Text variant="tech">Apollo</Text>
							<Text variant="tech">Passport</Text>
							<Text variant="tech">GraphQL</Text>
							<Text variant="tech">MongoDB</Text>
							<Text variant="tech">Heroku</Text>
						</HStack>
					</VStack>
					<HStack spacing="0" justify="end" mt="8">
						<Link variant="icon" href="#" isExternal>
							<Icon icon="feather:github" />
						</Link>
						<Link variant="icon" href="#" isExternal>
							<Icon icon="feather:external-link" />
						</Link>
					</HStack>
				</GridItem>
			</Grid>
			<Grid templateColumns="repeat(12, 1fr)" mt="24">
				<GridItem
					gridColumn="1 / 8"
					gridRow="1 / -1"
					zIndex="1"
					position="relative"
				>
					<Text variant="tech" color={`app.${colorMode}.accent.solid`}>
						Full-stack project
					</Text>
					<Heading variant="h4" as="h4">
						Trello Clone
					</Heading>
					<Box p="4" bg={`app.${colorMode}.dusk.200`} borderRadius="8" mt="8">
						<Text>
							Popular kanban-style project management tool’s clone. User has the
							ability to create, preview, update, pin, personalize and delete
							boards. Each board has rearrangable lists and items along with
							tags, checklists, comments and much more.
						</Text>
					</Box>
					<VStack spacing="3" align="start" mt="8">
						<HStack spacing="5">
							<Text variant="tech">React</Text>
							<Text variant="tech">Router</Text>
							<Text variant="tech">Styled Components</Text>
							<Text variant="tech">Socket.io</Text>
						</HStack>
						<HStack spacing="5">
							<Text variant="tech">Feathers</Text>
							<Text variant="tech">MongoDB</Text>
							<Text variant="tech">Heroku</Text>
						</HStack>
					</VStack>
					<HStack spacing="0" justify="start" mt="8">
						<Link variant="icon" href="#" isExternal>
							<Icon icon="feather:github" />
						</Link>
						<Link variant="icon" href="#" isExternal>
							<Icon icon="feather:external-link" />
						</Link>
					</HStack>
				</GridItem>
				<GridItem
					gridColumn="7 / -1"
					gridRow="1 / -1"
					bg={`app.${colorMode}.dusk.100`}
					opacity="0.2"
					borderRadius="8"
				></GridItem>
			</Grid>
		</Container>
	);
};
