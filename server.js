const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());

app.all('/*', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  //res.setHeader('Access-Control-Allow-Headers', 'Origin', 'X-Requested-With, Content-Type');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(express.static(__dirname + "/dist"));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.listen(process.env.PORT || 8080);
