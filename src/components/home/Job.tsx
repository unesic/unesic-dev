import React from "react";
import { v4 as uuidv4 } from "uuid";

import { Box, List, ListItem, Text, Link } from "@chakra-ui/react";

export type JobType = {
	title: string;
	date: {
		from: string;
		to: string;
	};
	company: {
		name: string;
		url: string;
	};
	items: string[];
};

interface JobProps {
	mode: "dark" | "light";
	job: JobType;
}

export const Job: React.FC<JobProps> = ({
	mode,
	job: { title, date, company, items },
}) => {
	return (
		<Box>
			<Text variant="light" mt="4">
				{title}{" "}
				<Text as="span" color={`app.${mode}.accent.solid`}>
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
