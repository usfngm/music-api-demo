const express = require('express')

// Create the express app
const app = express()

const axios = require('axios');

// Allow all Cross-Origin requests
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/deezer', (req, res) => {
    axios.get('https://api.deezer.com/genre/16/artists').then((result) => {
        res.status(200).send(result.data);
    }, (error) => {
        res.status(400).send(error);
    })
})


// Error handlers
app.use(function fourOhFourHandler(req, res) {
    res.status(404).send();
})
app.use(function fiveHundredHandler(err, req, res, next) {
    console.error(err)
    res.status(500).send()
})

// Start server
app.listen(8080, function (err) {
    if (err) {
        return console.error(err)
    }
    console.log('Started music-api-demo backend at http://localhost:8080')
})