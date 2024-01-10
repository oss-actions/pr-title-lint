"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testTitle = void 0;
const convention = /^(?<type>[^(:!]+)(\((?<scope>[^)]+)\))?(?<bang>!)?:/;
function testTitle(title) {
    var _a, _b;
    const match = title.match(convention);
    const type = (_a = match === null || match === void 0 ? void 0 : match.groups) === null || _a === void 0 ? void 0 : _a.type;
    const bang = (_b = match === null || match === void 0 ? void 0 : match.groups) === null || _b === void 0 ? void 0 : _b.bang;
    if (typeof type !== "string")
        return { success: false };
    return {
        success: true,
        hardIncrement: type === "major",
        increment: bang === "!" || type === "major"
            ? "major"
            : type === "feat" || type === "feature"
                ? "minor"
                : "patch",
    };
}
exports.testTitle = testTitle;
