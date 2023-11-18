import { rmSync } from "fs";
import { join } from "path";
import { outputValidResult } from "./outputValidResult";
import { getGithubOutputs } from "jamesons-actions-toolkit";

process.env.GITHUB_OUTPUT = join(__dirname, ".github-output.txt");

afterEach(() => {
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	rmSync(process.env.GITHUB_OUTPUT!, { force: true });
});

it("outputs a patch result hard=false", () => {
	outputValidResult({
		success: true,
		increment: "patch",
		hardIncrement: false,
	});
	expect(getGithubOutputs()).toMatchObject({
		increment: "patch",
		hard: "false",
	});
});

it("outputs a patch result hard=true", () => {
	outputValidResult({
		success: true,
		increment: "patch",
		hardIncrement: true,
	});
	expect(getGithubOutputs()).toMatchObject({
		increment: "patch",
		hard: "true",
	});
});

it("outputs a minor result hard=false", () => {
	outputValidResult({
		success: true,
		increment: "minor",
		hardIncrement: false,
	});
	expect(getGithubOutputs()).toMatchObject({
		increment: "minor",
		hard: "false",
	});
});

it("outputs a minor result hard=true", () => {
	outputValidResult({
		success: true,
		increment: "minor",
		hardIncrement: true,
	});
	expect(getGithubOutputs()).toMatchObject({
		increment: "minor",
		hard: "true",
	});
});

it("outputs a major result hard=false", () => {
	outputValidResult({
		success: true,
		increment: "major",
		hardIncrement: false,
	});
	expect(getGithubOutputs()).toMatchObject({
		increment: "major",
		hard: "false",
	});
});

it("outputs a major result hard=true", () => {
	outputValidResult({
		success: true,
		increment: "major",
		hardIncrement: true,
	});
	expect(getGithubOutputs()).toMatchObject({
		increment: "major",
		hard: "true",
	});
});
