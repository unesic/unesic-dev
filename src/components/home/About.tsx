/**
 * Base
 */
import React, { useMemo } from "react";

/**
 * Utilities
 */
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "lib/hooks/useTranslation";

/**
 * Chakra UI
 */
import {
	Container,
	Grid,
	GridItem,
	List,
	ListItem,
	Heading,
	Text,
	Code,
	useColorMode,
} from "@chakra-ui/react";

interface AboutProps {}

export const About = React.forwardRef<HTMLDivElement, AboutProps>(({}, ref) => {
	const _t = useTranslation("about");
	const { colorMode } = useColorMode();

	const monthDiff = useMemo(() => {
		const birthday = new Date(1998, 7, 1);
		const today = new Date();
		const months = today.getMonth() - birthday.getMonth();
		const years = today.getFullYear() - birthday.getFullYear();

		return (months + years * 12 + 1).toString();
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
			px={["8", "8", "12"]}
			py="32"
		>
			<Code>{_t.intro}</Code>
			<Heading variant="h3" as="h3">
				{_t.head}
			</Heading>
			<Grid templateColumns="repeat(12, 1fr)" gap={["0", "0", "0", "20"]}>
				<GridItem colSpan={[12, 12, 12, 7]}>
					{_t.copy.map((t) => (
						<Text key={uuidv4()} marginTop="4">
							{t.replace("%months%", monthDiff)}
						</Text>
					))}
					<Grid
						templateColumns={[
							"repeat(1, 1fr)",
							"repeat(1, 1fr)",
							"repeat(2, 1fr)",
						]}
						gap="2"
						marginTop="5"
					>
						{_t.tech.map((tl) => (
							<List key={uuidv4()} spacing="2" className="tech-list">
								{tl.map((ti) => (
									<ListItem key={uuidv4()}>{ti}</ListItem>
								))}
							</List>
						))}
					</Grid>
				</GridItem>
				<GridItem
					colSpan={[12, 10, 10, 5]}
					colStart={[1, 2, 2, "auto"]}
					minH={["20rem", "20rem", "25rem", "100%"]}
					bg={`app.${colorMode}.dusk.100`}
					opacity="0.2"
					borderRadius="8"
				></GridItem>
			</Grid>
		</Container>
	);
});
