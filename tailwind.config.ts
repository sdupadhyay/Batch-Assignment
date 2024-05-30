import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./Components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: { "text-primary": "var(--text-primary)" },
			padding: {
				"115px": "115px",
			},
			fontSize: {
				sm: ["32px", "40px"],
				xl: ["44px", "60px"],
				blogcardHeading: ["26px", "39px"],
				blogcardHeadingMobile: ["22px", "30px"],
			},
		},
		// colors: {
		// 	darkViolet: "#21243D",
		// },
	},
	plugins: [],
};
export default config;
