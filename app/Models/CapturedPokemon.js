export class CapturedPokemon {
  constructor(pokemonoData) {
    this.id = pokemonoData.id
    this.prepared = pokemonoData.prepared
    this.user = pokemonoData.user
    this.description = pokemonoData.description
    this.name = pokemonoData.name
    this.img = pokemonoData.img
  }

  get Template() {
    return /*html*/`
      <li class="list-group-item py-2">
        <input type="checkbox" ${this.prepared ? 'checked' : ''} onclick="app.capturePokemonController.togglePrepared('${this.id}')">
        <span class="ms-2">${this.name}</span>
        <img src="${this.img}" height="150" alt=""
        loading="">
      </li>
    `
  }
}