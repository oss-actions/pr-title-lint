import {
	getInput,
	fail,
	jobSummary,
	boolean,
	string,
} from "jamesons-actions-toolkit";
import { ValidTitleResult, testTitle } from "./testTitle";
import { versionIncrement } from "./versionIncrement";
import { outputValidResult } from "./outputValidResult";

const title = getInput("title", { type: string });
const summary = getInput("summary", { type: boolean });
const into = getInput("into", { type: string });

const result = testTitle(title) as ValidTitleResult;

if (!result.success) {
	fail`
		Title is not up to standards.
		
		Title must be formatted as follows:
		
		\`\`\`
		<type>: <summary>
		<type>!: <summary>
		<type>(<scope>): <summary>
		<type>(<scope>)!: <summary>
		\`\`\`
	`;
}

if (result.increment == "major" && into.startsWith("release/")) {
	fail`Breaking changes or major version bumps are not allowed on a release branch!`;
}

if (summary) {
	jobSummary`:rocket: Pull Request title is up to standards, and merging will cause a ${versionIncrement(
		result,
	)} version bump! :+1:`;
}

outputValidResult(result as ValidTitleResult);
