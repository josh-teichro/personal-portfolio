'use strict';

const log = console.log
log('Express server')

const express = require('express')
const app = express();

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/client/build"))

app.get("*", (req, res) => {
    res.sendFile(__dirname + "/client/build/index.html");
});

// port
const port = process.env.PORT || 5000
app.listen(port, () => {
    log(`Listening on port ${port}...`)
})
