/**
 * Base
 */
import React, { useMemo } from "react";

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
	Image,
	useColorMode,
	useBreakpointValue,
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
	images,
}) => {
	const { colorMode } = useColorMode();
	const isMobile = useBreakpointValue({ base: true, md: false });
	const isLtr = useMemo(() => dir === "ltr", [dir]);

	return (
		<Grid
			templateColumns="repeat(12, 1fr)"
			columnGap={["0", "0", "0", "12"]}
			rowGap="4"
			mt="16"
		>
			<GridItem
				gridColumn={
					isLtr
						? ["1 / full", "1 / full", "2 / 12", "7 / -1"]
						: ["1 / full", "1 / full", "2 / 12", "1 / 7"]
				}
				gridRow={["1 / 2", "1 / 2", "1 / 2", "1 / -1"]}
				borderRadius="8"
			>
				<Link isExternal href={links[1].link}>
					<Image
						src={images[colorMode]}
						opacity="0.6"
						_hover={{ opacity: 1 }}
						transition="opacity 0.2s ease-in-out 0s"
						alt={`${title} screenshot`}
						htmlWidth="1440"
						htmlHeight="916"
						mt={["0", "0", "0", "12", "0"]}
					/>
				</Link>
			</GridItem>

			<GridItem
				gridColumn={
					isLtr
						? ["1 / full", "1 / full", "2 / 12", "1 / 8"]
						: ["1 / full", "1 / full", "2 / 12", "6 / -1"]
				}
				gridRow={["unset", "unset", "unset", "1 / -1"]}
				px={["4", "4", "6", "0"]}
				textAlign={isLtr ? "left" : ["left", "left", "left", "right"]}
				position="relative"
				zIndex="1"
			>
				<Text variant="tech" color={`app.${colorMode}.accent.solid`}>
					{head}
				</Text>
				<Heading variant="h4" as="h4">
					<Link isExternal href={links[1].link}>
						{title}
					</Link>
				</Heading>
				<Box
					p="4"
					bg={`app.${colorMode}.dusk.200`}
					borderRadius="8"
					mt={["4", "4", "8"]}
				>
					<Text>{desc}</Text>
				</Box>
				{!isMobile ? (
					<VStack
						spacing="3"
						align={isLtr ? "start" : ["start", "start", "start", "end"]}
						mt="8"
					>
						{stack.map((col) => (
							<HStack
								key={uuidv4()}
								as="ul"
								role="list"
								spacing="0"
								wrap="wrap"
							>
								{col.map((tech, idx) => {
									const mr =
										idx !== col.length - 1 ? "1.25rem !important" : "0";
									return (
										<Text key={uuidv4()} as="li" variant="tech" mr={mr}>
											{tech}
										</Text>
									);
								})}
							</HStack>
						))}
					</VStack>
				) : (
					<VStack spacing="0" align="start" mt="4">
						<HStack key={uuidv4()} as="ul" role="list" spacing="0" wrap="wrap">
							{stack.map((col) =>
								col.map((tech, idx) => {
									const mr =
										idx !== col.length - 1 ? "1.25rem !important" : "0";
									const mt = "1.25rem !important";
									return (
										<Text key={uuidv4()} as="li" variant="tech" mr={mr} mt={mt}>
											{tech}
										</Text>
									);
								})
							)}
						</HStack>
					</VStack>
				)}
				<HStack
					spacing="0"
					justify={isLtr ? "start" : ["start", "start", "start", "end"]}
					mt={["4", "4", "8"]}
				>
					{links.map(({ type, link }) => (
						<Link
							key={uuidv4()}
							variant="icon"
							href={link}
							isExternal
							aria-label={
								type === "github"
									? `View ${title} source code`
									: `Visit ${title}`
							}
						>
							<Icon icon={`feather:${type}`} />
						</Link>
					))}
				</HStack>
			</GridItem>
		</Grid>
	);
};
