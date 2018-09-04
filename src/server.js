import express from "express";
// Express app setup
const app = express();

app.use(express.static("Pages"));

app.use(express.static("Components"));

app.use(express.static("images"));