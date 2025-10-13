import { resolve } from "node:path";
import { generate as vscode } from "./templates/vscode/build.ts";
import { generate as ghostty } from "./templates/ghostty/build.ts";
import { generate as warp } from "./templates/warp/build.ts";
import { generate as zed } from "./templates/zed/build.ts";
import taigaDark from "./colours/taiga-dark.json" with { type: "json" };
import taigaLight from "./colours/taiga-light.json" with { type: "json" };

const packagesDir = resolve(import.meta.dirname, "..", "packages");
const colours = [taigaDark, taigaLight];

function run() {
	colours.forEach((colourSet) => {
		vscode(packagesDir, colourSet);
		ghostty(packagesDir, colourSet);
		warp(packagesDir, colourSet);
	});

	zed(packagesDir, colours);
}

run();
