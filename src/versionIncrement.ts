import type { ValidTitleResult } from "./testTitle";

export function versionIncrement(result: ValidTitleResult): string {
	return result.increment === "major"
		? result.hardIncrement
			? "hard major"
			: "soft major"
		: result.increment;
}
