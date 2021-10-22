import React from "react";
import { Button, useColorMode } from "@chakra-ui/react";

import { Header } from "components/Header";

import { Hero } from "components/home/Hero";
import { About } from "components/home/About";
import { Experience } from "components/home/Experience";
import { Projects } from "components/home/Projects";
import { Contact } from "components/home/Contact";

const IndexPage: React.FC = () => {
	const { toggleColorMode } = useColorMode();

	return (
		<main>
			<Button position="fixed" inset="4" onClick={toggleColorMode}></Button>

			<Header />

			<Hero />
			<About />
			<Experience />
			<Projects />
			<Contact />
		</main>
	);
};

export default IndexPage;
