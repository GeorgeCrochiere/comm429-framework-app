async function genPokemon() {
    const url = document.getElementById("imgURL").innerHTML;

    await fetch(url).then((responseInit) => {
        return responseInit.json()
    }).then((response) => {
        console.log(response);
        document.getElementById("imgPkmn").innerHTML = `<img class="w-72" src="${response.sprites.front_default}" alt="${response.name}">`;
    });
};

genPokemon();
