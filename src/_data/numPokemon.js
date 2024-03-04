const EleventyFetch = require("@11ty/eleventy-fetch");

async function getAllPokemon() {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;

    let allPokemon = [];

    EleventyFetch(url, {
        duration: "1d",
        type: "json"
    }).then((response) => {
        response.results.forEach(element => {
            if (element.url.split('/')[element.url.split('/').length - 2] < 10000) {
                allPokemon.push({ "name": element.name, "url": element.url });
            }
        });
    });

    return ({ "results": allPokemon });
}

module.exports = getAllPokemon;