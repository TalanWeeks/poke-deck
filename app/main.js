import { pokemonDetailController } from "./Controllers/PokemonDetailController.js";
import { PokemonWishListController } from "./Controllers/PokemonWishListController.js";


class App {
  pokemonWishListController = new PokemonWishListController()
  pokemonDetailController = new pokemonDetailController()
}

window["app"] = new App();
