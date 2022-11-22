const express = require('express');
var app = express();
const path = require('path');

app.use('/', express.static(path.join(__dirname + '/App')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/App/App.html')
});

app.listen(8080, () => {
    console.log("LiteJS app listening on 8080");
})