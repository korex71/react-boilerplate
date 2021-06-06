const { Router } = require("express");

const Route = Router();

Route.get("/", (req, res) => {
  res.send({ hello: "world" });
});

module.exports = Route;
