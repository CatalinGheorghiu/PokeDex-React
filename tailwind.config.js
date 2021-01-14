module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			"nunito": ["nunito", "sans-serif"],
			"MyFont": ["\"My Font\"", "serif"] // Ensure fonts with spaces have " " surrounding it.
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
