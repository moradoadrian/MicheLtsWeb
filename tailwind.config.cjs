module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				brand: {
					DEFAULT: '#00cf6a',
					dark: '#00a455'
				},
				bg: '#0b0b0b'
			},
			fontFamily: {
				sans: ['"Montserrat"', 'sans-serif'],
				serif: ['"Oswald"', 'sans-serif'],
			}
		}
	},
	plugins: []
};