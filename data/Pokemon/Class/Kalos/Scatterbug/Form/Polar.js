const Base = require('../Vivillon').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Vivillon Polar'
        this.color = Entidades.Color.Blanco
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}