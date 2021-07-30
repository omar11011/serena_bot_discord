const Base = require('./Ash').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.redeem = true
        this.region = Entidades.Region.Kalos
        this.pokemon = 'Pikachu Gorra Kalos'
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}