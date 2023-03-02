// Require modules
const axios = require('axios');


// export a function that gets all houses from the API
module.exports = {
    getPokemon: async function (url) {
        return await axios.get(url)
    }
}