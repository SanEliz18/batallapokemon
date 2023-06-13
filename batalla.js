class Batalla{
    pokemon = ["asets/img/pokemon1.gif", "asets/img/pokemon2.gif", "asets/img/pokemon3.gif", "asets/img/pokemon4.gif"];
    poke = 0;
    posicion = 0

    pokemonRandom(){
        this.poke += Math.floor(Math.random() * 4);
        console.log(this.poke)
    }     
    
    mostrarPokemonRandom()
    {
        get.ElementById('imgpokemon2').value
    }
}