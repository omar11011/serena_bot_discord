const Base = require('../Dragonite').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Dragonite'
        this.peso = 220
        this.altura = 2.7
        this.evolucion = []
        this.stats = {
            hp: 100,
            attack: 170,
            defense: 110,
            spattack: 120,
            spdefense: 110,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}