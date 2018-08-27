import express from "express";
// Express app setup
const app = express();

app.use(express.static("Pages"));

app.use(express.static("Components"));

app.get("/", function(req, res) {
  res.send("hello world");
});
