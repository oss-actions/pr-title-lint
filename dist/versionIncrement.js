"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.versionIncrement = void 0;
function versionIncrement(result) {
    return result.increment === "major"
        ? result.hardIncrement
            ? "hard major"
            : "soft major"
        : result.increment;
}
exports.versionIncrement = versionIncrement;
