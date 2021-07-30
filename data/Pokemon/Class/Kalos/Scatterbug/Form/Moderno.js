const Base = require('../Vivillon').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Vivillon Moderno'
        this.color = Entidades.Color.Rojo
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}