export class PokemonWishList{
  constructor(pokemonData){
    this._id = pokemonData._id || ""
    this.name = pokemonData.name 
    this.url = pokemonData.url
  }

  get Template(){
    return /*html*/`
    <li class="list-group-item py-2 selectable" onclick="app.pokemonWishListController.getPokemonDetails('${this.url}')">${this.name}</li>`
  }
}