"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.outputValidResult = void 0;
const jamesons_actions_toolkit_1 = require("jamesons-actions-toolkit");
function outputValidResult(result) {
    (0, jamesons_actions_toolkit_1.appendGithubOutputs)({
        increment: result.increment,
        hard: result.hardIncrement.toString(),
    });
}
exports.outputValidResult = outputValidResult;
