var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello Im Sangga" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Welcome" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": "Mantappp!!!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
