const ip = require("ip");
const express = require("express");
const app = express();

app.set("views", "./render");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send(`뷁`);
});

app.listen(5000, console.log(`server connect ${ip.address()}`));
