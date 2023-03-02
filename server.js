// Require modules
const express = require('express');
const path = require('path');


// Require the API data
const data = require('./data');

// Create the Express app
const app = express();


// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Middleware (app.use)
app.use(express.static('public'))


// Mount routes
app.get('/', function (req, res) {
    data.getHouseData('https://pokeapi.co/api/v2/pokedex/3/')
        .then(api => {
            res.render('home', {
                houses: api.data,
                title: "Pokemon"
            })
        })
});


app.get('/house/about', function (req, res) {
    res.send("ABOUT")
})


app.get('/house/:id', function (req, res) {
    data.getHouseData('https://wizard-world-api.herokuapp.com/Houses/' + req.params.id)
        .then(api => {
            res.render('wikiPage', {
                house: api.data,
                title: api.data.name
            });
        })
        .catch(() => {
            res.render('404', {
                title: "Page Not Found"
            })
        })
})



// Tell the app to listen on port 3000
app.listen(3000, function () {
    console.log('Listening on port 3000');
});