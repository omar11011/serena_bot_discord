const Base = require('../Togekiss').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.spawn = false
        this.redeem = true
        this.pokemon = 'Chocokiss'
        this.evolucion = []
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}