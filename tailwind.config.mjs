/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'league': ['"League Spartan Variable"', 'sans-serif']
			}
		},
		colors: {
			'pvdmagenta':'hsl(300, 43%, 22%)',
			'pspink':'hsl(333, 80%, 67%)',
			'pdgrayish':'hsl(303, 10%, 53%)',
			'plgmagenta':'hsl(300, 24%, 96%)',
			'pwhite':'hsl(0, 0%, 100%)',
		}
	},
	plugins: [],
}
