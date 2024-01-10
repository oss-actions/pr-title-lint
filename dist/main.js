"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jamesons_actions_toolkit_1 = require("jamesons-actions-toolkit");
const testTitle_1 = require("./testTitle");
const versionIncrement_1 = require("./versionIncrement");
const outputValidResult_1 = require("./outputValidResult");
const title = (0, jamesons_actions_toolkit_1.getInput)("title", { type: jamesons_actions_toolkit_1.string });
const summary = (0, jamesons_actions_toolkit_1.getInput)("summary", { type: jamesons_actions_toolkit_1.boolean });
const into = (0, jamesons_actions_toolkit_1.getInput)("into", { type: jamesons_actions_toolkit_1.string });
const result = (0, testTitle_1.testTitle)(title);
if (!result.success) {
    (0, jamesons_actions_toolkit_1.fail) `
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
    (0, jamesons_actions_toolkit_1.fail) `Breaking changes or major version bumps are not allowed on a release branch!`;
}
if (summary) {
    (0, jamesons_actions_toolkit_1.jobSummary) `:rocket: Pull Request title is up to standards, and merging will cause a ${(0, versionIncrement_1.versionIncrement)(result)} version bump! :+1:`;
}
(0, outputValidResult_1.outputValidResult)(result);
