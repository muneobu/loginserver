const express = require("express");
const apple = express.Router();
const control = require("../control/control.js");

apple.get("/", control.home);
apple.get("/login", control.login);

module.exports = apple;
