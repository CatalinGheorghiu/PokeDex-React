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
			"1/2": "6px",
			"1": "12px",
			"2": "14px",
			"3": "20px",
			"4": "40px",
			"full": "50%"
		}, boxShadow: {
			"custom1": "0px 0px 31px 12px rgba(0,0,0,0.59)"
		}, backgroundColor: theme => ({
			...theme("colors"),
			"fire": "#F87F3D",
			"ice": "#90D8D8",
			"grass": "#6AC85C",
			"electric": "#FBCF4A",
			"water": "#6591EB",
			"ground": "#FBCF4A",
			"rock": "#BA9F45",
			"fairy": "#F5B6BC",
			"poison": "#A7409D",
			"bug": "#A5B83A",
			"dragon": "#773BF2",
			"psychic": "#6591EB",
			"flying": "#3dc7ef",
			"fighting": "#FBCF4A",
			"ghost": "#735895",
			"steel": "#B8B8CF",
			"dark": "#773BF2",
			"normal": "#A8A87C"
		}),
		extend: {
			backgroundImage: theme => ({
				"poke": "url('./img/poke.png')",
				"loader": "url('./img/loader.gif')",
				"cogs": "url('./img/cogs.gif')",
				"pika": "url('./img/loading-pika.gif')",
			})
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
