const Base = require('../Vivillon').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Vivillon Oriental'
        this.color = Entidades.Color.Morado
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}