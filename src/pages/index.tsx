import React, { useMemo, useRef } from "react";
import { LanguageProvider } from "lib/LanguageContext";

import { Header } from "components/Header";
import { Hero } from "components/home/Hero";
import { About } from "components/home/About";
import { Experience } from "components/home/Experience";
import { Projects } from "components/home/Projects";
import { Contact } from "components/home/Contact";

export type DivRef = React.MutableRefObject<HTMLDivElement>;

const IndexPage: React.FC = () => {
	const header = useRef() as DivRef;
	const hero = useRef() as DivRef;
	const about = useRef() as DivRef;
	const experience = useRef() as DivRef;
	const projects = useRef() as DivRef;
	const contact = useRef() as DivRef;

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

	return (
		<main>
			<LanguageProvider>
				<Header ref={header} refs={refs} />
				<Hero ref={hero} headerRef={header} aboutRef={about} />
				<About ref={about} />
				<Experience ref={experience} />
				<Projects ref={projects} />
				<Contact ref={contact} />
			</LanguageProvider>
		</main>
	);
};

export default IndexPage;
