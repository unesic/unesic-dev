/**
 * Base
 */
import React from "react";

/**
 * Utilities and types
 */
import { v4 as uuidv4 } from "uuid";
import { Project as IProject } from "lib/types/language.types";

/**
 * Chakra UI
 */
import {
	Grid,
	GridItem,
	Box,
	VStack,
	HStack,
	Heading,
	Text,
	Link,
	useColorMode,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

interface ProjectProps extends IProject {
	dir: "ltr" | "rtl";
}

export const Project: React.FC<ProjectProps> = ({
	dir,
	head,
	title,
	desc,
	stack,
	links,
}) => {
	const { colorMode } = useColorMode();

	return (
		<Grid templateColumns="repeat(12, 1fr)" mt="16">
			<GridItem
				gridColumn={
					dir === "ltr"
						? ["1 / full", "2 / 12", "2 / 12", "7 / -1", "7 / -1", "7 / -1"]
						: ["1 / full", "2 / 12", "2 / 12", "1 / 7", "1 / 7", "1 / 7"]
				}
				gridRow={["1 / 2", "1 / 2", "1 / 2", "1 / -1", "1 / -1", "1 / -1"]}
				minH={["20rem", "20rem", "20rem", "100%", "100%", "100%"]}
				bg={`app.${colorMode}.dusk.100`}
				opacity="0.2"
				borderRadius="8"
			></GridItem>
			<GridItem
				gridColumn={
					dir === "ltr"
						? ["1 / full", "2 / 12", "2 / 12", "1 / 8", "1 / 8", "1 / 8"]
						: ["1 / full", "2 / 12", "2 / 12", "6 / -1", "6 / -1", "6 / -1"]
				}
				gridRow={["unset", "unset", "unset", "1 / -1", "1 / -1", "1 / -1"]}
				textAlign={
					dir === "ltr"
						? "left"
						: ["left", "left", "left", "right", "right", "right"]
				}
				zIndex="1"
				position="relative"
			>
				<Text variant="tech" color={`app.${colorMode}.accent.solid`}>
					{head}
				</Text>
				<Heading variant="h4" as="h4">
					{title}
				</Heading>
				<Box p="4" bg={`app.${colorMode}.dusk.200`} borderRadius="8" mt="8">
					<Text>{desc}</Text>
				</Box>
				<VStack
					spacing="3"
					align={
						dir === "ltr"
							? "start"
							: ["start", "start", "start", "end", "end", "end"]
					}
					mt="8"
				>
					{stack.map((col) => (
						<HStack key={uuidv4()} as="ul" role="list" spacing="0" wrap="wrap">
							{col.map((tech, idx) => (
								<Text
									key={uuidv4()}
									as="li"
									variant="tech"
									mr={idx !== col.length - 1 ? "1.25rem !important" : "0"}
								>
									{tech}
								</Text>
							))}
						</HStack>
					))}
				</VStack>
				<HStack
					spacing="0"
					justify={
						dir === "ltr"
							? "start"
							: ["start", "start", "start", "end", "end", "end"]
					}
					mt="8"
				>
					{links.map(({ type, link }) => (
						<Link key={uuidv4()} variant="icon" href={link} isExternal>
							<Icon icon={`feather:${type}`} />
						</Link>
					))}
				</HStack>
			</GridItem>
		</Grid>
	);
};