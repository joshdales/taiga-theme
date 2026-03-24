const lightColours = {
	blue: {
		0: "#80b4f7",
		1: "#4493f4",
		2: "#0067ca",
		3: "#004386",
		4: "#002149",
	},
	green: {
		0: "#51B67A",
		1: "#2C965D",
		2: "#007742",
		3: "#00572F",
		4: "#00381C",
	},
	purple: {
		0: "#a375ea",
		1: "#8c40e4",
		2: "#6a2db0",
		3: "#4a1d7d",
		4: "#2c0e4d",
	},
	red: {
		0: "#FF6551",
		1: "#DE3E2D",
		2: "#BA0D01",
		3: "#8A0600",
		4: "#5C0300",
	},
	teal: {
		0: "#43B2AC",
		1: "#14938D",
		2: "#00736E",
		3: "#005350",
		4: "#003634",
	},
	yellow: {
		0: "#CD9200",
		1: "#A77600",
		2: "#825B00",
		3: "#5F4200",
		4: "#3E2A00",
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
		shadow: "#01030E",
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
