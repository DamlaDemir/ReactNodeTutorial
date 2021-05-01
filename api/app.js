var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.write("Welcome to API !")
    res.end();
});


app.listen(8000);