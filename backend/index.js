const express = require('express')
const axios = require('axios');

const app = express()

// Allow all Cross-Origin requests
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/genre', (req, res) => {
    axios.get('https://api.deezer.com/genre').then((result) => {
        res.status(200).send(result.data.data);
    }, (error) => {
        res.status(400).send(error);
    })
})

app.get('/genre_artists', (req, res) => {
    var gID = req.query.id;
    axios.get('https://api.deezer.com/genre/' + gID + '/artists').then((result) => {
        res.status(200).send(result.data.data);
    }, (error) => {
        res.status(400).send(error);
    })
})


app.listen(8080, function (err) {
    if (err) {
        return console.error(err)
    }
    console.log('Started music-api-demo backend at http://localhost:8080')
})