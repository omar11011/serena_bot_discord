const Base = require('../Vivillon').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.redeem = true
        this.pokemon = 'Vivillon Poke Ball'
        this.color = Entidades.Color.Rojo
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}