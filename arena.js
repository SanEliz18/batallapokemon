class arena{
    numero = 0

    seleccionarPokemonAleatorio() {
        var pokemonArray = [
            "asets/img/pokemon1.gif",
            "asets/img/pokemon2.gif",
            "asets/img/pokemon3.gif",
            "asets/img/pokemon4.gif",
            "asets/img/pokemon5.gif"
        ];
        var indiceAleatorio = Math.floor(Math.random() * pokemonArray.length);
        var imagenPokemon = document.getElementById("imgpokemon2");
        imagenPokemon.src = pokemonArray[indiceAleatorio];
    }
}