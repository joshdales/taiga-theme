export function themeName(theme: Record<string, unknown>, fileSuffix: string): string {
	return (theme.name as string).toLowerCase().replaceAll(/\s/g, '-') + `-${theme.type}.${fileSuffix}`
}
