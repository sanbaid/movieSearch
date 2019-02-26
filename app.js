const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');


app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/results', function(req, res){
    let searchQuery = req.query.search;
    let url = 'http://www.omdbapi.com/?s='+searchQuery+'&apikey=thewdb';
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
           const dataResults = JSON.parse(body);
           res.render('results',{dataResults: dataResults, page:'Results'});
        }
    })
})

app.get('/', function(req, res){
    res.render('index',{page:'Home'});
})


app.listen(8000);