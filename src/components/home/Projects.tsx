/**
 * Base
 */
import React from "react";

/**
 * Utilities
 */
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "lib/hooks/useTranslation";

/**
 * Components and Chakra UI
 */
import { Project } from "components/partials/Project";
import { Container, Heading, Code } from "@chakra-ui/react";

interface ProjectsProps {}

export const Projects = React.forwardRef<HTMLDivElement, ProjectsProps>(
	({}, ref) => {
		const _t = useTranslation("projects");

		return (
			<Container id="projects" maxW="container.xl" py="32" ref={ref}>
				<Code>{_t.intro}</Code>
				<Heading variant="h3" as="h3">
					{_t.head}
				</Heading>

				{_t.projects.map((project, idx) => (
					<Project key={uuidv4()} dir={idx % 2 ? "ltr" : "rtl"} {...project} />
				))}
			</Container>
		);
	}
);
