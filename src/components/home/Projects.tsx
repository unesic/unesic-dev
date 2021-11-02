import React from "react";
import { v4 as uuidv4 } from "uuid";

import { Container, Heading, Code } from "@chakra-ui/react";

import projects from "data/projects.json";
import { Project, ProjectType } from "./Project";

interface ProjectsProps {
	mode: "dark" | "light";
}

export const Projects = React.forwardRef<HTMLDivElement, ProjectsProps>(
	({ mode }, ref) => {
		return (
			<Container id="projects" maxW="container.xl" py="32" ref={ref}>
				<Code>Has he got anything to show?</Code>
				<Heading variant="h3" as="h3">
					My latest creations.
				</Heading>

				{(projects as ProjectType[]).map((project, idx) => (
					<Project
						key={uuidv4()}
						mode={mode}
						dir={idx % 2 ? "ltr" : "rtl"}
						project={project}
					/>
				))}
			</Container>
		);
	}
);
