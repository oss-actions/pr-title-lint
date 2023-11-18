import type { ValidTitleResult } from "./testTitle";
import { appendGithubOutputs } from "jamesons-actions-toolkit";

export function outputValidResult(result: ValidTitleResult) {
	appendGithubOutputs({
		increment: result.increment,
		hard: result.hardIncrement.toString(),
	});
}
