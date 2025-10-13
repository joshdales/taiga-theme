const lightColours = {
	blue: {
		0: "#59A0F9",
		1: "#3A81D7",
		2: "#1762B6",
		3: "#00468C",
		4: "#002D5E"
	},
	green: {
		0: "#51B67A",
		1: "#2C965D",
		2: "#007742",
		3: "#00572F",
		4: "#00381C"
	},
	purple: {
		0: "#B17EFF",
		1: "#945CE1",
		2: "#773CBF",
		3: "#5B169E",
		4: "#3D006F"
	},
	red: {
		0: "#FF6551",
		1: "#DE3E2D",
		2: "#BA0D01",
		3: "#8A0600",
		4: "#5C0300"
	},
	teal: {
		0: "#43B2AC",
		1: "#14938D",
		2: "#00736E",
		3: "#005350",
		4: "#003634"
	},
	yellow: {
		0: "#CD9200",
		1: "#A77600",
		2: "#825B00",
		3: "#5F4200",
		4: "#3E2A00"
	}
}

export const taigaLight = {
	name: "Taiga",
	type: "light",
	ui: {
		0: "#E5EFFF",
		1: "#98BFFE",
		2: "#7A9FDD",
		3: "#5C80BC",
		highlight: "#00681b",
		shadow: "#01030E"
	},
	text: {
		1: "#01030E",
		2: "#2D3547",
		3: "#5A6377",
		4: "#A4AEC4",
		highlight: "#1762B6"
	},
	...lightColours
}
