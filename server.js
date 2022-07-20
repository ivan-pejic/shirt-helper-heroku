const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

var corsOptions = {
  origin: function (origin, callback) {
    // db.loadOrigins is an example call to load
    // a list of origins from a backing database
    db.loadOrigins(function (error, origins) {
      callback(error, origins);
    });
  },
};

app.use(express.static(__dirname + "/dist"));
app.get("/*", cors(corsOptions), (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

// Add headers
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://completion.amazon.com/"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.listen(process.env.PORT || 8080);
