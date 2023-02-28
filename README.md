# Nintendo Commission: Build a Pokedex
<p align="center"><img src="pokedex.png"></p>

## Background
It is the early days of Pokemon, and Nintendo wants to build a website featuring various pokedexes from different regions! They turned to you to build out their site, and have given you access to their [pokemon data](https://pokeapi.co/).

## Part 1: The Kanto Pokedex
Your first commission si to build out the Kanto Pokedex! You requirements are as follows:

- Use AJAX (axios or fetch) to query the PokeAPI for all pokemon URLs in the [Kanto pokedex endpoint](https://pokeapi.co/api/v2/pokedex/2/)
- Create a carousel that cycles through each pokemon listed in the Kanto pokedex endpoint. Each slide of the carousel will display the following information:
    1. Pokemon name
    1. Picture of the pokemon
    1. Type (water, fire, pyschic, etc)
    1. Weight
    1. Height
    
    *Hint:* You will need to make multiple AJAX requests to the PokeAPI. Each pokemon has thier own URL/endpoint!
- Style your pokedex using SCSS
    1. Center the carousel
    1. Add a background to your web page
    1. Make your carousel responsive to the size of the screen
    1. Import and use a new font


### Bonus
- Use Bootstrap to style your carousel
- Add more information about the pokemon in each carousel slide
