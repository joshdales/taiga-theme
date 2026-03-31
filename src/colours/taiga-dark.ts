const highlight = "#00681b";

const colours = {
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
		1: colours.blue[1],
		2: colours.blue[2],
		3: colours.blue[3],
	},
	teal: {
		1: colours.teal[1],
		2: colours.teal[2],
		3: colours.teal[3],
	},
	green: {
		1: colours.green[1],
		2: colours.green[2],
		3: colours.green[3],
	},
	purple: {
		1: colours.purple[1],
		2: colours.purple[2],
		3: colours.purple[3],
	},
	red: {
		1: colours.red[1],
		2: colours.red[2],
		3: colours.red[3],
	},
	yellow: {
		1: colours.yellow[1],
		2: colours.yellow[2],
		3: colours.yellow[3],
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
		highlight,
		shadow: terminal.black[3],
	},
	text: {
		1: "#efeeed",
		2: "#bebbb7",
		3: "#8d8b87",
		4: "#5e5d5b",
		highlight: colours.green[4],
	},
	terminal,
	...colours,
};

export const taigaTrees = {
	name: "Taiga Trees",
	type: "dark",
	ui: {
		0: "#001806",
		1: "#072711",
		2: "#124321",
		3: "#1f6132",
		highlight,
		shadow: terminal.black[3],
	},
	text: {
		1: "#efeeed",
		2: "#bebbb7",
		3: "#8d8b87",
		4: "#5e5d5b",
		highlight: colours.green[4],
	},
	terminal,
	...colours,
};
