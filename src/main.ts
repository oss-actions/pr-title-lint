import { getInput, fail, jobSummary } from "jamesons-actions-toolkit";
import { ValidTitleResult, testTitle } from "./testTitle";
import { versionIncrement } from "./versionIncrement";

const title = getInput("title", { type: String });

const result = testTitle(title);

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

jobSummary`:rocket: Pull Request title is up to standards, and merging will cause a ${versionIncrement(
	result as ValidTitleResult,
)} version bump! :+1:`;
