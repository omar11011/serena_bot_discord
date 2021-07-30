const Base = require('./Ash').class
const Entidades = require('../../../../../index')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.redeem = true
        this.region = Entidades.Region.Alola
        this.pokemon = 'Pikachu Gorra Alola'
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}