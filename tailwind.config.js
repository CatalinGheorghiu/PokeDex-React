module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			"nunito": ["nunito", "sans-serif"],
			"MyFont": ["\"My Font\"", "serif"] // Ensure fonts with spaces have " " surrounding it.
		},
		backgroundSize: {
			"1": "4rem",
			"2": "12rem",
			"2/4": "14rem",
			"3": "18rem",
			"4": "24rem",
		}, borderRadius: {
			"1": "12px",
			"2": "14px",
		},
		extend: {
			backgroundImage: theme => ({
				"poke": "url('./img/poke.png')",
			})
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
