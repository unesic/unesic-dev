import React from "react";
import { v4 as uuidv4 } from "uuid";

import { Container, Heading, Code } from "@chakra-ui/react";

import jobs from "data/jobs.json";
import { Job, JobType } from "./Job";

interface ExperienceProps {
	mode: "dark" | "light";
}

export const Experience = React.forwardRef<HTMLDivElement, ExperienceProps>(
	({ mode }, ref) => {
		return (
			<Container
				id="experience"
				maxW={[
					"100%",
					"container.sm",
					"container.sm",
					"container.lg",
					"container.lg",
					"container.lg",
				]}
				py="32"
				ref={ref}
			>
				<Code>Does he have any experience?</Code>
				<Heading variant="h3" as="h3">
					Where I’ve worked.
				</Heading>
				{(jobs as JobType[]).map((job) => (
					<Job key={uuidv4()} mode={mode} job={job} />
				))}
			</Container>
		);
	}
);
