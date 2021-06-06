"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const constants_1 = require("../src/constants");
const request_1 = __importDefault(require("request"));
// @Download
const file = fs_1.default.createWriteStream(constants_1.BINARY_PATH);
(async () => {
    new Promise((resolve, reject) => {
        request_1.default({
            uri: constants_1.BINARY_URL,
            headers: {
                Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "en-US,en;q=0.9,fr;q=0.8,ro;q=0.7,ru;q=0.6,la;q=0.5,pt;q=0.4,de;q=0.3",
                "Cache-Control": "max-age=0",
                Connection: "keep-alive",
                "Upgrade-Insecure-Requests": "1",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36",
            },
            gzip: true,
        })
            .pipe(file)
            .on("finish", () => {
            resolve("Youtube-dl binary updated. 📌");
        })
            .on("error", (error) => {
            reject(error);
        });
    }).catch((error) => {
        console.log(`Something happened: ${error}`);
    });
})();
