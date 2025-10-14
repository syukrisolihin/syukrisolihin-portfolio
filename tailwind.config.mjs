import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'bg-primary': '#181818',
				'text-primary': '#F5F5F5',
				'text-secondary': '#a0a0a0',
				'accent-blue': '#00BFFF',
				'accent-amber': '#B58500',
			},
			fontFamily: {
				'heading': ['Playfair Display', ...defaultTheme.fontFamily.serif],
				'body': ['Montserrat', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'), // <-- ADD THIS LINE
	],
}