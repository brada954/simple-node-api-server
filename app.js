var express = require("express");
var app = express();

app.get("/empty", (req, res, next) => {
    res.end();
});

app.get("/string", (req, res, next) => {
    res.send('Hello World!');
});

app.get("/object", (req, res, next) => {
    res.json({'message': "Hi!"});
});

app.get("/array", (req, res, next) => {
    res.json([]);
});

app.get("/array/colors", (req, res, next) => {
    res.json(['red', 'blue', 'green']);
});

app.get("/200/html", (req, res, next) => {
    res.send('<html><body><h1>Hello World!</h1><div>This is a div!</div></body></html>');
});

app.get("/500", (req, res, next) => {
    res.status(500).end();
});

app.get("/500/html", (req, res, next) => {
    res.status(500).send('<html><body><h1>500 Error!</h1><div>This is a div!</div></body></html>');
});

app.get("/500/object", (req, res, next) => {
    res.status(500).json({ error: 'Server Error occurred'});
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});