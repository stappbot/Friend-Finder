const express = require("express");
const bodyParser = require("body-parser");
const friends = require("./app/data/friends");
const path = require("path");

const app = express();

app.use(bodyParser.json());

app.get("/api/friends", function(req, res) {
  res.send(friends);
});

app.post("/api/friends", function(req, res) {
  res.send(req.body);
});

app.get("/survey", function(req, res) {
  res.sendFile(path.resolve(__dirname, "app/public/survey.html"));
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
