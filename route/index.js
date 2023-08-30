const express = require("express");
const apple = express.Router();
const control = require("../control/control.js");

apple.get("/", control.home);
apple.get("/login", control.login);

apple.post("/login", (req, res) => {
  console.log("login post ");
  console.log(req.body);
  res.send({ id: req.body.id });
});

module.exports = apple;
