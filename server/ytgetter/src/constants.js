"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BINARY_PATH = exports.BINARY_URL = exports.BINARY_FILENAME = exports.BINARY_DIR = void 0;
const os_1 = __importDefault(require("os"));
const path_1 = __importDefault(require("path"));
const PLATFORM = os_1.default.platform() === "win32" ? "win32" : "unix";
const BINARY_URL = PLATFORM === "unix"
    ? "https://yt-dl.org/downloads/latest/youtube-dl"
    : "https://yt-dl.org/downloads/2021.05.16/youtube-dl.exe";
exports.BINARY_URL = BINARY_URL;
const BINARY_DIR = path_1.default.join(__dirname, "..", "bin");
exports.BINARY_DIR = BINARY_DIR;
const BINARY_FILENAME = process.env.BINARY_FILENAME ||
    `youtube-dl${PLATFORM === "win32" ? ".exe" : ""}`;
exports.BINARY_FILENAME = BINARY_FILENAME;
const BINARY_PATH = path_1.default.join(BINARY_DIR, BINARY_FILENAME);
exports.BINARY_PATH = BINARY_PATH;
