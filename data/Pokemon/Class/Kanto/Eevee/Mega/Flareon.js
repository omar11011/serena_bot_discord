const Base = require('../Flareon').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Flareon'
        this.peso = 29
        this.altura = 1.4
        this.evolucion = []
        this.stats = {
            hp: 80,
            attack: 150,
            defense: 75,
            spattack: 120,
            spdefense: 110,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}