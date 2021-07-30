const Base = require('../Vivillon').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Vivillon Taiga'
        this.color = Entidades.Color.Azul
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}