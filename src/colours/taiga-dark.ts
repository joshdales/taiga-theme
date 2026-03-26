const darkColours = {
	blue: {
		0: "#2263af",
		1: "#2e80e0",
		2: "#4390ee",
		3: "#62a1f0",
		4: "#98c1f5",
	},
	green: {
		0: "#31724b",
		1: "#429363",
		2: "#4aa46e",
		3: "#53b67b",
		4: "#64d993",
	},
	purple: {
		0: "#773ac0",
		1: "#945ddf",
		2: "#a074e3",
		3: "#ac89e7",
		4: "#c6b1ef",
	},
	red: {
		0: "#b52113",
		1: "#e72b1b",
		2: "#f84431",
		3: "#f96c58",
		4: "#faa495",
	},
	teal: {
		0: "#02736e",
		1: "#00948e",
		2: "#02a49e",
		3: "#00b6af",
		4: "#02d9d1",
	},
	yellow: {
		0: "#b38734",
		1: "#d8a441",
		2: "#ecb347",
		3: "#f7c56c",
		4: "#fcecd3",
	},
};

const terminal = {
	black: {
		1: "#000000",
		2: "#121212",
		3: "#414141",
	},
	blue: {
		1: darkColours.blue[1],
		2: darkColours.blue[2],
		3: darkColours.blue[3],
	},
	teal: {
		1: darkColours.teal[1],
		2: darkColours.teal[2],
		3: darkColours.teal[3],
	},
	green: {
		1: darkColours.green[1],
		2: darkColours.green[2],
		3: darkColours.green[3],
	},
	purple: {
		1: darkColours.purple[1],
		2: darkColours.purple[2],
		3: darkColours.purple[3],
	},
	red: {
		1: darkColours.red[1],
		2: darkColours.red[2],
		3: darkColours.red[3],
	},
	yellow: {
		1: darkColours.yellow[1],
		2: darkColours.yellow[2],
		3: darkColours.yellow[3],
	},
	white: {
		1: "#f9f9f9",
		2: "#fdfdfd",
		3: "#ffffff",
	},
};

export const taiga = {
	name: "Taiga",
	type: "dark",
	ui: {
		0: "#000924",
		1: "#10213e",
		2: "#283b5a",
		3: "#425677",
		highlight: "#00681b",
		shadow: "#414141",
	},
	text: {
		1: "#D3DEF5",
		2: "#A4AEC4",
		3: "#5A6377",
		4: "#3f475a",
		highlight: "#72D699",
	},
	terminal,
	...darkColours,
};

export const taigaTrees = {
	name: "Taiga Trees",
	type: "dark",
	ui: {
		0: "#020e04",
		1: "#072711",
		2: "#124321",
		3: "#1f6132",
		highlight: "#00681b",
		shadow: "#0F171F",
	},
	text: {
		1: "#efeeed",
		2: "#bebbb7",
		3: "#8d8b87",
		4: "#5e5d5b",
		highlight: "#72D699",
	},
	terminal,
	...darkColours,
};
