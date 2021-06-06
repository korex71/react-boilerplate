const { Router } = require("express");
const { default: ytdl } = require("../ytgetter/src");

const Route = Router();

Route.get("/", (req, res) => {
  res.send({ hello: "world" });
});

Route.post("/api", (req, res) => {
  try {
    const { url } = req.body;
    ytdl(url, {
      noWarnings: true,
      preferFreeFormats: true,
      dumpSingleJson: true,
      youtubeSkipDashManifest: true,
    })
      .then((data) => {
        res.send({ data });
      })
      .catch((error) => {
        res.send({ error: "Verify the url" });
      });
  } catch (error) {
    res.send({ error: "Verify the url" });
  }
});

module.exports = Route;
