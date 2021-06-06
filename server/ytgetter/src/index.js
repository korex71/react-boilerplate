"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const execa_1 = __importDefault(require("execa"));
const helpers_1 = require("./helpers");
const constants_1 = require("./constants");
async function default_1(url, flags, opts) {
    const result = await execa_1.default(constants_1.BINARY_PATH, helpers_1.args(url, flags), opts);
    return helpers_1.parse(result);
}
exports.default = default_1;
