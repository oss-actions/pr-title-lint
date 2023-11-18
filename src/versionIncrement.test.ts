import { versionIncrement } from "./versionIncrement";

it("title test result: patch", () => {
	expect(
		versionIncrement({
			success: true,
			increment: "patch",
			hardIncrement: false,
		}),
	).toStrictEqual("patch");

	expect(
		versionIncrement({
			success: true,
			increment: "patch",
			hardIncrement: true,
		}),
	).toStrictEqual("patch");
});

it("title test result: minor", () => {
	expect(
		versionIncrement({
			success: true,
			increment: "minor",
			hardIncrement: false,
		}),
	).toStrictEqual("minor");

	expect(
		versionIncrement({
			success: true,
			increment: "minor",
			hardIncrement: true,
		}),
	).toStrictEqual("minor");
});

it("title test result: major", () => {
	expect(
		versionIncrement({
			success: true,
			increment: "major",
			hardIncrement: false,
		}),
	).toStrictEqual("soft major");

	expect(
		versionIncrement({
			success: true,
			increment: "major",
			hardIncrement: true,
		}),
	).toStrictEqual("hard major");
});
