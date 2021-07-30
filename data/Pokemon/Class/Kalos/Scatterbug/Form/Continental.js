const Base = require('../Vivillon').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Vivillon Continental'
        this.color = Entidades.Color.Amarillo
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}