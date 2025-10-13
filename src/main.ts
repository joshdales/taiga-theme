import { resolve } from "node:path";
import { generate as vscode } from "./templates/vscode/build.ts";
import { generate as ghostty } from "./templates/ghostty/build.ts";
import { generate as warp } from "./templates/warp/build.ts";
import { generate as zed } from "./templates/zed/build.ts";
import * as taigaDark from './colours/taiga-dark.ts'
import * as taigaLight from './colours/taiga-light.ts'

const packagesDir = resolve(import.meta.dirname, "..", "packages");
const colours = [
	taigaDark.taiga, taigaLight.taigaLight,
];

function run() {
	colours.forEach((colourSet) => {
		vscode(packagesDir, colourSet);
		ghostty(packagesDir, colourSet);
		warp(packagesDir, colourSet);
	});

	zed(packagesDir, colours);
}

run();
