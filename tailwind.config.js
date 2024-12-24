module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				Karla: ["Karla", " serif"],
			},
			colors: {
				"light-coffee": "#C89F94",
			},
			keyframes: {
				slideDown: {
					"0%": { transform: "translateY(-100%)" },
					"100%": { transform: "translateY(0)" },
				},
			},
			animation: {
				slideDown: "slideDown 1s ease-in-out",
			},
			backgroundImage: {
				'slider-bg': 'url("./images/slider1.jpg")',
      }
		},
	},
	plugins: [],
};
