import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary_gray: "#272425",
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				".full": {
					"width": "100%",
					"height": "100%"
				},
				".custom-shadow": {
					"box-shadow": "0 0 5px gray",
					"border-color": "gray"
				}
			})
		}),
	],
} satisfies Config;