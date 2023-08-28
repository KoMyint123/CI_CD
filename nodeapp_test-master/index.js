var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From Computer Technology" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World " }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, Have A Nice Day!" }');
});

// Create a route to redirect to a YouTube link
app.get('/youtube', (req, res) => {
    // Redirect to the YouTube link
    res.redirect('https://www.youtube.com/watch?v=YOUR_VIDEO_ID');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
