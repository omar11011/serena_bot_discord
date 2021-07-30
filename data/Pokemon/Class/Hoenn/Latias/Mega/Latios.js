const Base = require('../Latios').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Latios'
        this.peso = 70
        this.altura = 2.3
        this.evolucion = []
        this.stats = {
            hp: 80,
            attack: 130,
            defense: 100,
            spattack: 160,
            spdefense: 120,
            speed: 110,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}