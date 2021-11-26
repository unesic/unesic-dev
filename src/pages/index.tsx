import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { LanguageProvider } from "lib/LanguageContext";

import { Header } from "components/Header";
import { Ribbon } from "components/Ribbon";
import { SEO } from "components/SEO";

import { Hero } from "components/home/Hero";
import { About } from "components/home/About";
import { Experience } from "components/home/Experience";
import { Projects } from "components/home/Projects";
import { Contact } from "components/home/Contact";
import { useColorMode } from "@chakra-ui/color-mode";

export type DivRef = React.MutableRefObject<HTMLDivElement>;

const IndexPage: React.FC = () => {
	const header = useRef() as DivRef;
	const hero = useRef() as DivRef;
	const about = useRef() as DivRef;
	const experience = useRef() as DivRef;
	const projects = useRef() as DivRef;
	const contact = useRef() as DivRef;

	const { setColorMode } = useColorMode();

	const refs = useMemo(
		() => ({
			header: header,
			hero: hero,
			about: about,
			experience: experience,
			projects: projects,
			contact: contact,
		}),
		[]
	);

	const handleModeChange = useCallback((e: any) => {
		setColorMode(e.matches ? "dark" : "light");
	}, []);

	useEffect(() => {
		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", handleModeChange);

		return () => {
			window
				.matchMedia("(prefers-color-scheme: dark)")
				.removeEventListener("change", handleModeChange);
		};
	}, []);

	return (
		<main style={{ overflowX: "hidden" }}>
			<SEO />
			<LanguageProvider>
				<Header ref={header} refs={refs} />
				<Hero ref={hero} headerRef={header} aboutRef={about} />
				<About ref={about} />
				<Experience ref={experience} />
				<Projects ref={projects} />
				<Contact ref={contact} />

				<Ribbon />
			</LanguageProvider>
		</main>
	);
};

export default IndexPage;
