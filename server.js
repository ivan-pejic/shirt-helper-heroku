const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());

app.all('/*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, content-type");
  next();
});

app.use(express.static(__dirname + "/dist"));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.listen(process.env.PORT || 8080);
