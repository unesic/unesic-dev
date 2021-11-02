import React, { useMemo, useRef } from "react";
import { useColorMode } from "@chakra-ui/react";

import { Header } from "components/Header";
import { Hero } from "components/home/Hero";
import { About } from "components/home/About";
import { Experience } from "components/home/Experience";
import { Projects } from "components/home/Projects";
import { Contact } from "components/home/Contact";

export type DivRef = React.MutableRefObject<HTMLDivElement>;

const IndexPage: React.FC = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const headerRef = useRef() as DivRef;
	const heroRef = useRef() as DivRef;
	const aboutRef = useRef() as DivRef;
	const experienceRef = useRef() as DivRef;
	const projectsRef = useRef() as DivRef;
	const contactRef = useRef() as DivRef;

	const menuItems = useMemo(
		() => [
			{
				id: "header",
				nav: {
					num: 0,
					char: "H",
				},
				ref: headerRef,
			},
			{
				id: "hero",
				nav: {
					num: 0,
					char: "H",
				},
				ref: heroRef,
			},
			{
				id: "about",
				label: "About",
				nav: {
					num: 1,
					char: "B",
				},
				ref: aboutRef,
			},
			{
				id: "experience",
				label: "Experience",
				nav: {
					num: 3,
					char: "E",
				},
				ref: experienceRef,
			},
			{
				id: "projects",
				label: "Projects",
				nav: {
					num: 3,
					char: "J",
				},
				ref: projectsRef,
			},
			{
				id: "contact",
				label: "Contact",
				nav: {
					num: 1,
					char: "O",
				},
				ref: contactRef,
			},
			{
				id: "resume",
				label: "Resume",
				nav: {
					num: 3,
					char: "U",
				},
				isBtn: true,
				url: "#",
			},
		],
		[]
	);

	return (
		<main>
			<Header
				mode={colorMode}
				toggleMode={toggleColorMode}
				ref={headerRef}
				menuItems={menuItems}
			/>
			<Hero mode={colorMode} ref={heroRef} headerRef={headerRef} />
			<About mode={colorMode} ref={aboutRef} />
			<Experience mode={colorMode} ref={experienceRef} />
			<Projects mode={colorMode} ref={projectsRef} />
			<Contact mode={colorMode} ref={contactRef} />
		</main>
	);
};

export default IndexPage;
