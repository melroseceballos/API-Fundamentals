const table = document.createElement('table')
table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Weight</th>
            <th>Height</th>
            <th>Type</th>
        </tr>
    `
// FETCHING API AND TURNING RESULTS TO JSON
async function fetchPokemon(url) {
    return await fetch(url)
        .then(res => res.json())
}

// GOING INTO API INDICES
fetchPokemon('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    .then(data => {
        for (let pokemon of data.results) {
            fetchPokemon(pokemon.url)
                .then(pokemon => {
                    const row = document.createElement('tr')
                    const namePokemon = document.createElement('td')
                    const weightPokemon = document.createElement('td')
                    const heightPokemon = document.createElement('td')
                    const typePokemon = document.createElement('td')
                    const imgPokemon = document.createElement('td')
                    namePokemon.innerText = pokemon.name
                    weightPokemon.innerText = pokemon.weight
                    heightPokemon.innerText = pokemon.height
                    typePokemon.innerText = pokemon.types[0].type.name
                    imgPokemon.innerHTML = `<img src="${pokemon.sprites.front_default}">`
                    //  IMAGES PATHWAY
                    console.log(imgPokemon)
                    
                    row.append(namePokemon, weightPokemon, heightPokemon,typePokemon,imgPokemon)
                    table.append(row)
                })
        }

        // Append the finished table to the page
        document.body.innerHTML = ""
        document.body.append(table)
    })


    // IMAGE CAROUSEL
    const pokeImages = document.getElementsByClassName('imgPokemon');
    