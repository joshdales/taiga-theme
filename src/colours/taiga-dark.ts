const darkColours = {
	blue: {
		0: "#1762B6",
		1: "#3A81D7",
		2: "#59A0F9",
		3: "#91C1FF",
		4: "#C9E0FF",
	},
	green: {
		0: "#007742",
		1: "#2C965D",
		2: "#51B67A",
		3: "#72D699",
		4: "#93F8B8",
	},
	purple: {
		0: "#9957ee",
		1: "#ad82f1",
		2: "#c2a6f5",
		3: "#d9c9f9",
		4: "#f1ebfd",
	},
	red: {
		0: "#BA0D01",
		1: "#DE3E2D",
		2: "#FF6551",
		3: "#FFA191",
		4: "#FFD2CA",
	},
	teal: {
		0: "#00736E",
		1: "#14938D",
		2: "#43B2AC",
		3: "#67D2CC",
		4: "#89F4ED",
	},
	yellow: {
		0: "#825B00",
		1: "#A77600",
		2: "#CD9200",
		3: "#F0B135",
		4: "#FFD896",
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
		shadow: "#0F171F",
	},
	text: {
		1: "#D3DEF5",
		2: "#A4AEC4",
		3: "#5A6377",
		4: "#3f475a",
		highlight: "#72D699",
	},
	...darkColours,
};

export const taigaTrees = {
	name: "Taiga Trees",
	type: "dark",
	ui: {
		0: "#10190f",
		1: "#263423",
		2: "#3e5239",
		3: "#577251",
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
	...darkColours,
};
