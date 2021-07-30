const Base = require('../Pikachu').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.spawn = false
        this.redeem = true
        this.pokemon = 'Ranchu'
        this.region = Entidades.Region.Saife
        this.evolucion = []
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}