const lightColours = {
	blue: {
		0: "#80b4f7",
		1: "#4493f4",
		2: "#0067ca",
		3: "#004386",
		4: "#002149",
	},
	green: {
		0: "#2dc275",
		1: "#239e5f",
		2: "#1a7c49",
		3: "#115c35",
		4: "#083d22",
	},
	purple: {
		0: "#a375ea",
		1: "#8c40e4",
		2: "#6a2db0",
		3: "#4a1d7d",
		4: "#2c0e4d",
	},
	red: {
		0: "#ffa191",
		1: "#c40e00",
		2: "#a20a00",
		3: "#800600",
		4: "#5b0300",
	},
	teal: {
		0: "#03bdb6",
		1: "#02837e",
		2: "#17726d",
		3: "#0e534f",
		4: "#063533",
	},
	yellow: {
		0: "#ffb923",
		1: "#d99b02",
		2: "#b27e00",
		3: "#8d6300",
		4: "#694900",
	},
	terminal: {
		black: {
			1: "#000000",
			2: "#121212",
			3: "#414141",
		},
		blue: {
			1: "#004386",
			2: "#0067ca",
			3: "#4493f4",
		},
		teal: {
			1: "#0e534f",
			2: "#17726d",
			3: "#02837e",
		},
		green: {
			1: "#239e5f",
			2: "#1a7c49",
			3: "#115c35",
		},
		purple: {
			1: "#8c40e4",
			2: "#6a2db0",
			3: "#4a1d7d",
		},
		red: {
			1: "#800600",
			2: "#a20a00",
			3: "#c40e00",
		},
		yellow: {
			1: "#8d6300",
			2: "#b27e00",
			3: "#d99b02",
		},
		white: {
			1: "#f9f9f9",
			2: "#fdfdfd",
			3: "#ffffff",
		},
	},
};

export const taigaLight = {
	name: "Taiga",
	type: "light",
	ui: {
		0: "#E5EFFF",
		1: "#98BFFE",
		2: "#7A9FDD",
		3: "#5C80BC",
		highlight: "#00681b",
		shadow: "#121212",
	},
	text: {
		1: "#01030E",
		2: "#2D3547",
		3: "#5A6377",
		4: "#A4AEC4",
		highlight: "#1762B6",
	},
	...lightColours,
};

export const taigaTreesLight = {
	name: "Taiga Trees",
	type: "light",
	ui: {
		0: "#e6f3e3",
		1: "#cce0c8",
		2: "#b7cbb2",
		3: "#a4b6a0",
		highlight: "#00681b",
		shadow: "#01030E",
	},
	text: {
		1: "#010101",
		2: "#2c2b28",
		3: "#6b6863",
		4: "#b1aca4",
		highlight: "#00572F",
	},
	...lightColours,
};
