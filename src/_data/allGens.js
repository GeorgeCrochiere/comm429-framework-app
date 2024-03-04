const EleventyFetch = require("@11ty/eleventy-fetch");

async function getAllGens() {
    const url = `https://pokeapi.co/api/v2/generation`;

    let allGens = [];

    EleventyFetch(url, {
        duration: "1d",
        type: "json"
    }).then(response => {
        response.results.forEach(element => {
            nameParts = element.name.split('-')
            genName = nameParts[0].substring(0, 1).toUpperCase() + nameParts[0].substring(1) + " " + nameParts[1].toUpperCase();
            allGens.push({ "name": genName, "url": element.url });
        });
    });

    return ({ "results": allGens });
}

module.exports = getAllGens;