const e = require("express");
const express = require("express");
const apple = express.Router();
const control = require("../control/control.js");

const data = {
  id: ["banana", "tomato", "cherry"],
  pw: ["bb", "tt", "cc"],
};

apple.get("/", control.home);
apple.get("/login", control.login);

apple.post("/login", (req, res) => {
  if (data.id.includes(req.body.id)) {
    const idx = data.id.indexOf(req.body.id);
    if (data.pw[idx] === req.body.pw) {
      res.send({ message: "login success" });
    } else {
      res.send({ message: "wrong password" });
    }
  } else {
    res.send({ message: "존재하지 않는 아이디입니다" });
  }
});

module.exports = apple;
