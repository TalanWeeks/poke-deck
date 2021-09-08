export class PokemonDetail{
  constructor(pokemonData){
    this.id = pokemonData.id 
    this.name = pokemonData.name
    this.img = pokemonData.sprites.front_shiny
  }

  get Template(){
    return/*html*/`
    <div class="card elevation-2">
        <div class="card-header">
          <h3>${this.name}</h3>
        </div>
        <div class="card-body scrollable-y" style="max-height:50vh;">
        <img src="${this.img}" height="150" alt=""
        loading="">
        </div>
        <div class="card-footer">
          <button class="btn btn-success" onclick="app.pokemonDetailController.catchPokemon()">Capture</button>
        </div>
      </div>
    `
  }
}