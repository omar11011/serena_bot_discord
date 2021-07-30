const Base = require('../Yveltal').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Yveltal'
        this.peso = 270
        this.altura = 6.3
        this.evolucion = []
        this.stats = {
            hp: 136,
            attack: 151,
            defense: 95,
            spattack: 151,
            spdefense: 98,
            speed: 119,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}