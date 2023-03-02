# Nintendo Commissions: Building Pokedexes
<p align="center"><img src="pokedex.png"></p>

## Background
It is the early days of Pokemon, and Nintendo wants to build a website featuring various pokedexes from different regions! They turned to you to build out their site, and have given you access to their [pokemon data](https://pokeapi.co/).

## Part 1: The Kanto Pokedex
Your first commission is to build out the Kanto Pokedex! You requirements are as follows:

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


## Part 2: The Johto Pokedex
- Nintendo loved your Kanto Pokedex! They just released a new region, and want you to include it's pokedex on your site. Additionally, they inform you many more regions will be created so you need to scale their website using Express.
- Use AJAX (axios or fetch) to query the PokeAPI for all pokemon in the [Johto pokedex endpoint](https://pokeapi.co/api/v2/pokedex/3/)
- Refactor your previous carousel into an EJS template called `carousel.ejs` that can be reused for both pokedexes
- Create a route for each pokedex
    - This route will render the `carousel.ejs` template and populate it with the pokemon from each pokedex
    - Example: when `localhost:3000/johto` is hit it will render the `carousel.ejs` template and display the pokemon from the Johto pokedex
- Create a dynamic route (using URL parameters) and an EJS template called `pokemon.ejs` that will display more information about a specific pokemon from the API. This route will be triggered when a pokemon's image from the carousel is clicked.

### Bonus
- Refactor your static assets into the appropriate folder in your Express file structure
- Using an EJS partial for the <head> element, import your stylesheet into the pokedex template and the pokemon show page template
