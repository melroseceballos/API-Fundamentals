// Require modules
const express = require('express');
const path = require('path');


// Require the API data
const api = require('./data');

// Create the Express app
const app = express();


// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Middleware (app.use)
app.use(express.static('public'))


// Mount routes
app.get('/kanto', function (req, res) {
    // Get all pokemon endpoints in the Kanto pokedex
    api.getPokemon('https://pokeapi.co/api/v2/pokedex/2/')
        .then(async pokedex => {
            // Get data from each pokemon's endpoint and save it in an array
            const allPokemonObjs = []
            for (let pokemon of pokedex.data.pokemon_entries) {
                const pokemonUrl = pokemon.pokemon_species.url.replace('-species', '')
                // wait for the pokemon's endpoint to respond, and save it to a variable
                const pokemonRes = await api.getPokemon(pokemonUrl)
                // create a smaller object with only the pokemon data we need
                const pokemonObj = {
                    image: pokemonRes.data.sprites.other["official-artwork"].front_default,
                    name: pokemonRes.data.name,
                    type: pokemonRes.data.types[0].type.name,
                    height: pokemonRes.data.height,
                    weight: pokemonRes.data.weight
                }
                allPokemonObjs.push(pokemonObj)
            }

            res.render('carousel', {
                allPokemonObjs: allPokemonObjs,
                title: pokedex.data.name
            })
        })
});


app.get('/johto', function (req, res) {
    // Get all pokemon endpoints in the Kanto pokedex
    api.getPokemon('https://pokeapi.co/api/v2/pokedex/3/')
        .then(async pokedex => {
            // Get data from each pokemon's endpoint and save it in an array
            const allPokemonObjs = []
            for (let pokemon of pokedex.data.pokemon_entries) {
                const pokemonUrl = pokemon.pokemon_species.url.replace('-species', '')
                // wait for the pokemon's endpoint to respond, and save it to a variable
                const pokemonRes = await api.getPokemon(pokemonUrl)
                // create a smaller object with only the pokemon data we need
                const pokemonObj = {
                    image: pokemonRes.data.sprites.other["official-artwork"].front_default,
                    name: pokemonRes.data.name,
                    type: pokemonRes.data.types[0].type.name,
                    height: pokemonRes.data.height,
                    weight: pokemonRes.data.weight
                }
                allPokemonObjs.push(pokemonObj)
            }

            res.render('carousel', {
                allPokemonObjs: allPokemonObjs,
                title: pokedex.data.name
            })
        })
});


app.get('/pokemon/:name', function (req, res) {
    api.getPokemon('https://pokeapi.co/api/v2/pokemon/' + req.params.name)
        .then(pokemon => {
            res.render('showPokemon', {
                pokemon: pokemon.data
            })
        })
})


// Tell the app to listen on port 3000
app.listen(3000, function () {
    console.log('Listening on port 3000');
});