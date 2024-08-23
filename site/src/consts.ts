import type { Site, Metadata, Socials } from "./types";

export const SITE: Site = {
	NAME: "Taylor Tyler",
	EMAIL: "taylorgtyler@gmail.com",
	NUM_POSTS_ON_HOMEPAGE: 3,
	NUM_WORKS_ON_HOMEPAGE: 2,
	NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
	TITLE: "Home",
	DESCRIPTION: "Blog and portfolio of Taylor Tyler.",
};

export const BLOG: Metadata = {
	TITLE: "Blog",
	DESCRIPTION: "A collection of articles from me about.",
};

export const WORK: Metadata = {
	TITLE: "Work",
	DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
	TITLE: "Projects",
	DESCRIPTION:
		"A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
	{
		NAME: "github",
		HREF: "https://github.com/taylorgtyler",
	},
	{
		NAME: "linkedin",
		HREF: "https://www.linkedin.com/in/taylor-tyler-932349158/",
	},
];
