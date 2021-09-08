import { ProxyState } from "../AppState.js"
import { pokemonService } from "../Services/PokemonService.js"

function _drawPokemonList(){
  let pokes = ProxyState.apiPokemon
  let template = ''
  pokes.forEach(p => template += p.Template)
  document.getElementById('pokemon-wish-list').innerHTML = template
}

export class PokemonWishListController{
  constructor(){
    ProxyState.on('apiPokemon',_drawPokemonList)
    pokemonService.getPokemon()
  }

  async getPokemonDetails(url){
    try {
      await pokemonService.getPokemonDetails(url)
    } catch (error) {
      console.error('[GET POKEMON DETAILS]',error)
    }
  }
}