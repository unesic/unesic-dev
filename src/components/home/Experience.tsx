import React from "react";

import { Container, Box } from "@chakra-ui/react";
import { List, ListItem } from "@chakra-ui/react";
import { Heading, Text, Code, Link } from "@chakra-ui/react";

interface ExperienceProps {
	colorMode: "dark" | "light";
}

export const Experience: React.FC<ExperienceProps> = ({ colorMode }) => {
	return (
		<Container id="experience" maxW="container.lg" py="32">
			<Code>Does he have any experience?</Code>
			<Heading variant="h3" as="h3">
				Where I’ve worked.
			</Heading>
			<Box>
				<Text variant="light" mt="4">
					WordPress Developer{" "}
					<Text as="span" color={`app.${colorMode}.accent.solid`}>
						@{" "}
						<Link variant="external" href="#" isExternal>
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
						<Link variant="external" href="#" isExternal>
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
	);
};
