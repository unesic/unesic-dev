/**
 * Base
 */
import React from "react";

/**
 * Utilities and types
 */
import { v4 as uuidv4 } from "uuid";
import { Job as IJob } from "lib/types/language.types";

/**
 * Chakra UI
 */
import {
	Box,
	List,
	ListItem,
	Text,
	Link,
	useColorMode,
} from "@chakra-ui/react";

interface JobProps extends IJob {}

export const Job: React.FC<JobProps> = ({ title, date, company, items }) => {
	const { colorMode } = useColorMode();

	return (
		<Box>
			<Text variant="light" mt="4">
				{title}{" "}
				<Text as="span" color={`app.${colorMode}.accent.solid`}>
					@{" "}
					<Link variant="external" href={company.url} isExternal>
						{company.name}
					</Link>
				</Text>
			</Text>
			<Text variant="tech">
				{date.from} – {date.to}
			</Text>
			<List spacing="2" mt="4" className="tech-list">
				{items.map((item) => (
					<ListItem key={uuidv4()}>{item}</ListItem>
				))}
			</List>
		</Box>
	);
};
