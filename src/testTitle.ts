export interface ValidTitleResult {
	success: true;
	increment: "major" | "minor" | "patch";
	hardIncrement: boolean;
}
export interface InvalidTitleResult {
	success: false;
}
export type TitleResult = ValidTitleResult | InvalidTitleResult;

const convention = /^(?<type>[^(:!]+)(\((?<scope>[^)]+)\))?(?<bang>!)?:/;

export function testTitle(title: string): TitleResult {
	const match = title.match(convention);
	const type = match?.groups?.type;
	const bang = match?.groups?.bang;

	if (typeof type !== "string") return { success: false };

	return {
		success: true,
		hardIncrement: type === "major",
		increment:
			bang === "!" || type === "major"
				? "major"
				: type === "feat" || type === "feature"
				  ? "minor"
				  : "patch",
	};
}
