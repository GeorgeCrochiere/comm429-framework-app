const EleventyFetch = require("@11ty/eleventy-fetch");

async function getAllPokemon() {
    const url = `https://pokeapi.co/api/v2/pokemon`;

    const response = EleventyFetch(url, {
        duration: "1d",
        type: "json"
    });
    const typeData = response;
    return typeData;
}

module.exports = getAllPokemon;