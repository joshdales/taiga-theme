const lightColours = {
	blue: {
		0: "#3d8ff3",
		1: "#1f71cd",
		2: "#1a62b4",
		3: "#15549c",
		4: "#0c3a6e",
	},
	green: {
		0: "#2aa966",
		1: "#208650",
		2: "#1a7545",
		3: "#15653b",
		4: "#0c4627",
	},
	purple: {
		0: "#9b7cd0",
		1: "#8254c3",
		2: "#7249ac",
		3: "#623f95",
		4: "#442a69",
	},
	red: {
		0: "#ee5240",
		1: "#c53727",
		2: "#ad2f21",
		3: "#97271b",
		4: "#6a1910",
	},
	teal: {
		0: "#2fa39c",
		1: "#23817c",
		2: "#1e716c",
		3: "#17625d",
		4: "#0e4340",
	},
	yellow: {
		0: "#ffb926",
		1: "#d19501",
		2: "#ba8400",
		3: "#a37301",
		4: "#775301",
	},
};

const terminal = {
	black: {
		1: "#000000",
		2: "#121212",
		3: "#414141",
	},
	blue: {
		1: lightColours.blue[3],
		2: lightColours.blue[2],
		3: lightColours.blue[1],
	},
	teal: {
		1: lightColours.teal[3],
		2: lightColours.teal[2],
		3: lightColours.teal[1],
	},
	green: {
		1: lightColours.green[3],
		2: lightColours.green[2],
		3: lightColours.green[1],
	},
	purple: {
		1: lightColours.purple[3],
		2: lightColours.purple[2],
		3: lightColours.purple[1],
	},
	red: {
		1: lightColours.red[3],
		2: lightColours.red[2],
		3: lightColours.red[1],
	},
	yellow: {
		1: lightColours.yellow[3],
		2: lightColours.yellow[2],
		3: lightColours.yellow[1],
	},
	white: {
		1: "#f9f9f9",
		2: "#fdfdfd",
		3: "#ffffff",
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
	terminal,
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
	terminal,
	...lightColours,
};
