import { readFileSync, writeFile } from "node:fs";
import { resolve } from "node:path";
import mustache from 'mustache'
import { themeName } from "../../utils/themeName.ts"

const theme = readFileSync(`${import.meta.dirname}/theme.yml`, {
	encoding: "utf-8",
})

/**
 * Create the Taiga theme variant based on the provided configuration
 * @param colourTheme The theme configuration, which includes the type and colours
 */
export function generate(dirPath: string, colourTheme: Record<string, unknown>) {
	const data = mustache.render(theme, colourTheme);

	writeFile(
		resolve(
			dirPath,
			"warp",
			themeName(colourTheme, '.yml')
		),
		data,
		(err) => {
			if (err) throw err;
			console.log(`Wrote Warp's ${colourTheme.type} theme`);
		},
	);
}
