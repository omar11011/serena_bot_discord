const Base = require('../Furfrou').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Furfrou Corte Caballero'
        this.color = Entidades.Color.Verde
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}