const Base = require('../Heracross').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Heracross'
        this.peso = 62.5
        this.altura = 1.7
        this.evolucion = []
        this.stats = {
            hp: 80,
            attack: 185,
            defense: 115,
            spattack: 40,
            spdefense: 105,
            speed: 75,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}