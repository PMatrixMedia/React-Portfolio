import express from "express";
// Express app setup
const path = require('path');
const app = express.createserver();

app.use(express.static("Pages"));

app.use(express.static("Components"));

app.use(express.static("Images"));

app.use(express.static(path.join(__dirname, 'build')));

-app.get('/node/express/myapp/foo', function (req,res) {
+app.get('/node/express/myapp/bar', function(req,res) {
    res.sendfile(path.join(__dirname, 'build', 'index.html'));
})});

app.listen(9000);