import { testTitle } from "./testTitle";

it("fails on invalid pull request titles", () => {
	expect(testTitle("something")).toMatchObject({ success: false });
	expect(testTitle("fix something")).toMatchObject({ success: false });
	expect(testTitle("feat something")).toMatchObject({ success: false });
	expect(testTitle("major something")).toMatchObject({ success: false });
	expect(testTitle("fix(): something")).toMatchObject({ success: false });
	expect(testTitle("fix!(): something")).toMatchObject({ success: false });
});

it("identifies valid patch type titles", () => {
	expect(testTitle("test: something")).toMatchObject({
		success: true,
		increment: "patch",
		hardIncrement: false,
	});

	expect(testTitle("imp(scope): something")).toMatchObject({
		success: true,
		increment: "patch",
		hardIncrement: false,
	});

	expect(testTitle("whatever:")).toMatchObject({
		success: true,
		increment: "patch",
		hardIncrement: false,
	});
});

it("identifies valid minor version titles", () => {
	expect(testTitle("feat: something")).toMatchObject({
		success: true,
		increment: "minor",
		hardIncrement: false,
	});

	expect(testTitle("feat(scope): something")).toMatchObject({
		success: true,
		increment: "minor",
		hardIncrement: false,
	});
});

it("identifies valid major version titles", () => {
	expect(testTitle("whatever!: something")).toMatchObject({
		success: true,
		increment: "major",
		hardIncrement: false,
	});
});

it("identifies valid hard major version titles", () => {
	expect(testTitle("major: something")).toMatchObject({
		success: true,
		increment: "major",
		hardIncrement: true,
	});
});
