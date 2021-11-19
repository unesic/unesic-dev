export interface NavItem {
	id: string;
	label?: string;
	nav: {
		num: number;
		char: string;
	};
	isBtn?: boolean;
	url?: string;
}

export interface Resume {
	head: string;
	copy: string[];
	variants: {
		head: string;
		dark: {
			text: string;
			url: string;
		};
		light: {
			text: string;
			url: string;
		};
	}[];
	buttons: {
		cta: string;
		default: string;
		pack: string;
	};
}

export interface Header {
	nav: NavItem[];
	resume: Resume;
}

export interface Hero {
	intro: string;
	head: string;
	subhead: string;
	copy: string[];
	cta: string;
}

export interface About {
	intro: string;
	head: string;
	copy: string[];
	tech: string[][];
}

export interface Job {
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
}

export interface Experience {
	intro: string;
	head: string;
	jobs: Job[];
}

export interface Project {
	head: string;
	title: string;
	desc: string;
	stack: string[][];
	links: {
		type: string;
		link: string;
	}[];
}

export interface Projects {
	intro: string;
	head: string;
	projects: Project[];
}
export interface Contact {
	intro: string;
	head: string;
	copy: string[];
	cta: string;
}

export interface Language {
	language: string;
	header: Header;
	hero: Hero;
	about: About;
	experience: Experience;
	projects: Projects;
	contact: Contact;
}
