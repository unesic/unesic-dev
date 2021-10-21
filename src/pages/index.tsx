import React from "react";
import {
	useColorMode,
	Heading,
	Text,
	Code,
	Container,
	Grid,
	GridItem,
	Button,
	List,
	ListItem,
	Link,
	Flex,
	Stack,
	Box,
	VStack,
	HStack,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const IndexPage: React.FC = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<main>
			<Button
				position="fixed"
				top="40"
				right="4"
				onClick={toggleColorMode}
				display="none"
			>
				TOGGLE
			</Button>

			<Container maxW="container.xl">
				<Flex
					as="nav"
					align="center"
					justify="space-between"
					wrap="wrap"
					py={8}
				>
					<Box w="100px">
						<Text fontSize="lg" fontWeight="bold"></Text>
					</Box>
					<Box>
						<Stack
							spacing={1}
							align="center"
							justify="flex-end"
							direction="row"
						>
							<Link
								to="#"
								color={`app.${colorMode}.dawn.100`}
								fontSize="md"
								fontFamily="mono"
								p="2"
							>
								About
							</Link>
							<Link
								to="#"
								color={`app.${colorMode}.dawn.100`}
								fontSize="md"
								fontFamily="mono"
								p="2"
							>
								Experience
							</Link>
							<Link
								to="#"
								color={`app.${colorMode}.dawn.100`}
								fontSize="md"
								fontFamily="mono"
								p="2"
							>
								Projects
							</Link>
							<Link
								to="#"
								color={`app.${colorMode}.dawn.100`}
								fontSize="md"
								fontFamily="mono"
								p="2"
							>
								Contact
							</Link>
							<Button>Resume</Button>
						</Stack>
					</Box>
				</Flex>
			</Container>

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
							A software engineer specializing in full-stack web development
							with primary focus on the front-end technologies.
						</Text>
						<Button mt="12">Get to know me!</Button>
					</GridItem>
					<GridItem colSpan={4}></GridItem>
				</Grid>
			</Container>

			<Container maxW="container.xl" px="12" py="32">
				<Code>Who the hell is this guy?</Code>
				<Heading variant="h3" as="h3">
					About me.
				</Heading>
				<Grid templateColumns="repeat(12, 1fr)" gap="20">
					<GridItem colSpan={7}>
						<Text marginTop="4">
							We might’ve gotten off on the wrong foot, so allow me to properly
							introduce myself. Hi, my name is Uroš Nešić, I’m 279 months old
							and I enjoy building things for the web!
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

			<Container maxW="container.lg" py="32">
				<Code>Does he have any experience?</Code>
				<Heading variant="h3" as="h3">
					Where I’ve worked.
				</Heading>
				<Box>
					<Text variant="light" mt="4">
						WordPress Developer{" "}
						<Text as="span" color={`app.${colorMode}.accent.solid`}>
							@{" "}
							<Link href="#" isExterna>
								BlueGrid
							</Link>
						</Text>
					</Text>
					<Text variant="tech">February 2020 – Present</Text>
					<List spacing="2" mt="4">
						<ListItem>
							Custom theme, templates and post types development for a highly
							trafficked website
						</ListItem>
						<ListItem>
							Converting Figma designs to fully responsive, functional and
							interactive website pages
						</ListItem>
						<ListItem>
							SEO and performance optimization using various caching and
							lazy-loading techniques
						</ListItem>
						<ListItem>
							Custom solutions development using React along with TypeScript and
							3rd party APIs
						</ListItem>
						<ListItem>
							Production of clean, easily-maintainable and scaleable JavaScript,
							CSS and php code
						</ListItem>
					</List>
				</Box>
				<Box mt="8">
					<Text variant="light" mt="4">
						WordPress Developer{" "}
						<Text as="span" color={`app.${colorMode}.accent.solid`}>
							@{" "}
							<Link href="#" isExterna>
								Ivapix
							</Link>
						</Text>
					</Text>
					<Text variant="tech">September 2018 – January 2020</Text>
					<List spacing="2" mt="4">
						<ListItem>
							Designed, developed and shipped beautiful and modern-looking
							websites for clients
						</ListItem>
						<ListItem>
							Website hosting maintenance through cPanel and maintenance of the
							website itself
						</ListItem>
						<ListItem>
							Tracked analytics and SEO performance using Google Search Console
							and Analytics
						</ListItem>
					</List>
				</Box>
			</Container>

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
								Note taking and expense tracking application with a handy
								overview on weekly and monthly income/expense totals accompanied
								by an analytics graph that provides a more through insight.
								Authenticate with a simple email/password combination or using
								social media.
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
								Popular kanban-style project management tool’s clone. User has
								the ability to create, preview, update, pin, personalize and
								delete boards. Each board has rearrangable lists and items along
								with tags, checklists, comments and much more.
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

			<Container maxW="container.md" py="40">
				<Box px="4" textAlign="center">
					<Code>He's okay I guess...</Code>
					<Heading variant="h3" as="h3">
						Get in touch.
					</Heading>
					<Text mt="4">
						Whether you have a question, looking to hire or you have a project
						idea for the next billion dollar unicorn that will take us to the
						moon. Stop by and say hi and I’ll do my best not to ghost you or
						leave you hanging for too long!
					</Text>
					<Button mt="12">Email me</Button>
				</Box>
			</Container>
		</main>
	);
};

export default IndexPage;
