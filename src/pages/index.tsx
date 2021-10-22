import React, { useRef } from "react";
import { Button, useColorMode } from "@chakra-ui/react";

import { Header } from "components/Header";

import { Hero } from "components/home/Hero";
import { About } from "components/home/About";
import { Experience } from "components/home/Experience";
import { Projects } from "components/home/Projects";
import { Contact } from "components/home/Contact";

const IndexPage: React.FC = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const headerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

	return (
		<main>
			<Button position="fixed" inset="4" onClick={toggleColorMode}></Button>

			<Header colorMode={colorMode} ref={headerRef} />

			<Hero colorMode={colorMode} headerRef={headerRef} />
			<About colorMode={colorMode} />
			<Experience colorMode={colorMode} />
			<Projects colorMode={colorMode} />
			<Contact colorMode={colorMode} />
		</main>
	);
};

export default IndexPage;
