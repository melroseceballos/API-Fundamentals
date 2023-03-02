// FETCHING POKEMON API 
async function getPokemon(url) {
    return await fetch(url)
        .then(res => res.json())
}

// GETTING POKEMON ENDPOINTS HERE
getPokemon('https://pokeapi.co/api/v2/pokedex/2/')
    .then(data => {

        // Fetch & store data from each pokemon's endpoint
        const getPokemonData = []
        for (let pokemon of data.pokemon_entries) {
            const pokemonUrl = pokemon.pokemon_species.url.replace('-species', '')
            getPokemon(pokemonUrl)
                .then(res => {
                    getPokemonData.push(res)
                    const img = document.createElement('img');
                    img.src = res.sprites.other["official-artwork"].front_default // CHANGE ME
                    document.getElementById('carousel-images').append(img)
                })
                console.log(getPokemonData)
        }

        // CAROUSEL HERE
        let currentImgIndex = 0;
        let previousImgIndex = 0;
        const prev = document.querySelector('.prev')
        prev.addEventListener('click', () => navi(-1))
        const next = document.querySelector('.next')
        next.addEventListener('click', () => navi(1))
        const images = document.getElementsByTagName('img');
        function navi(nextToPrevious) {
            previousImgIndex = currentImgIndex
            currentImgIndex = currentImgIndex + nextToPrevious
            images[previousImgIndex].style.display = 'none';
            if (currentImgIndex >= images.length) {
                currentImgIndex = 0;
            } else if (currentImgIndex < 0) {
                currentImgIndex = images.length + nextToPrevious;
            }
            images[currentImgIndex].style.display = 'block'
        }
        
    })