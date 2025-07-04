import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		// "./node_modules/preline/preline.js",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				display: ["var(--font-oswald)"],
				sans: ["var(--font-roboto-flex)"],
			},
			padding: {
				"header": "var(--header-height)",
			},
			minHeight: {
				"section": "var(--section-height)",
			},
		},
	},
	corePlugins: {
		aspectRatio: false,
	},
	// plugins: [require("preline/plugin"), require("@tailwindcss/aspect-ratio")],
	plugins: [require("@tailwindcss/aspect-ratio")],
};
export default config;
