import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Montsterrat", ...defaultTheme.fontFamily.sans],
				serif: ["Sora", ...defaultTheme.fontFamily.serif],
			},
			colors: {
				"accent-green": "#239b56",
				"accent-green-light": "#7a904f",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
