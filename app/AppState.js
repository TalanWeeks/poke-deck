import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
 
  /** @type {import('./Models/PokemonWishList.js').PokemonWishList[]} */
  apiPokemon = []

  /** @type {import('./Models/PokemonDetail.js').PokemonDetail[]} */

  currentPokemon = []

  sandboxPokemon = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
