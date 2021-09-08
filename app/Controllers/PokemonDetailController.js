import { ProxyState } from "../AppState.js";


function _drawCurrentPokemon(){
  console.log('did it work', ProxyState.currentPokemon);
  document.getElementById("pokemon-detail").innerHTML = ProxyState.currentPokemon.Template
}

export class pokemonDetailController{
  constructor(){  
    ProxyState.on('currentPokemon', _drawCurrentPokemon)
  }
}