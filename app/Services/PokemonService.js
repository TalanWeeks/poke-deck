import { ProxyState } from "../AppState.js"
import { PokemonDetail } from "../Models/PokemonDetail.js"
import { PokemonWishList } from "../Models/PokemonWishList.js"

// @ts-ignore
const pokemonApi = axios.create({
  baseURL: 'https://pokeapi.co/'
})

class PokemonService{
  async getPokemonDetails(url){
    let res = await pokemonApi.get(url)
    console.log('!!!???',res)
    ProxyState.currentPokemon = new PokemonDetail(res.data)
    ProxyState.currentPokemon = ProxyState.currentPokemon 
    console.log(ProxyState.currentPokemon)
  }

  async getPokemon(){
    let res = await pokemonApi.get('api/v2/pokemon?limit=50')
    console.log('log the res of spells data', res.data.results)
    ProxyState.apiPokemon = res.data.results.map(p => new PokemonWishList(p))

    console.log('the console log after the map',ProxyState.apiPokemon)
  }
}

export const pokemonService = new PokemonService