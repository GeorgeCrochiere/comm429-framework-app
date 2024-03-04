const EleventyFetch = require("@11ty/eleventy-fetch");

async function getAllTypes() {
    const url = `https://pokeapi.co/api/v2/type`;

    let allTypes = [];

    EleventyFetch(url, {
        duration: "1d",
        type: "json"
    }).then(response => {
        response.results.forEach(element => {
            if (element.url.split('/')[element.url.split('/').length - 2] < 100) {
                allTypes.push({ "name": element.name, "url": element.url });
            }
        });
    });

    return ({ "results": allTypes });
}

module.exports = getAllTypes;