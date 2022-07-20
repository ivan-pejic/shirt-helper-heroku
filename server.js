const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + "/dist"));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

// Add headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.listen(process.env.PORT || 8080);
