const Base = require('../Vivillon').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Vivillon Isleño'
        this.color = Entidades.Color.Marrón
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}