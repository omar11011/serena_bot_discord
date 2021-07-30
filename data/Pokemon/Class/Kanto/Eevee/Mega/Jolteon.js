const Base = require('../Jolteon').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Jolteon'
        this.peso = 32
        this.altura = 1.1
        this.evolucion = []
        this.stats = {
            hp: 85,
            attack: 65,
            defense: 60,
            spattack: 150,
            spdefense: 115,
            speed: 140,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}