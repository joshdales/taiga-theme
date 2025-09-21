export function darkLight() {
	return (text: string, render: Function) => {
		const [dark, light] = text.split("|");
		const string = `{{#dark}}${dark}{{/dark}}{{^dark}}${light}{{/dark}}`;
		return render(string);
	};
}
