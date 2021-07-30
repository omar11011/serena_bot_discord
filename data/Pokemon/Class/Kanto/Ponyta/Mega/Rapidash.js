const Base = require('../Rapidash').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Rapidash'
        this.peso = 110
        this.altura = 2
        this.evolucion = []
        this.stats = {
            hp: 95,
            attack: 100,
            defense: 70,
            spattack: 120,
            spdefense: 85,
            speed: 115,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}