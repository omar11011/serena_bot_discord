const Base = require('../Hawlucha').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Hawlucha'
        this.peso = 23.5
        this.altura = 0.8
        this.evolucion = []
        this.stats = {
            hp: 98,
            attack: 132,
            defense: 85,
            spattack: 84,
            spdefense: 73,
            speed: 128,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}