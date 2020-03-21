const express = require('express');
const path = require('path');
const https = require('https');

const app = express();

app.get('/', function (req, res) {
    res.send('hello world');
})

app.get('/getAboutMe', function (req, res) {
    console.log("Give about me details")
})

app.listen(5000, () => {
    console.log("Server Started");
})