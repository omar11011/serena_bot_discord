const Base = require('../Espeon').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Espeon'
        this.peso = 28
        this.altura = 1
        this.evolucion = []
        this.stats = {
            hp: 75,
            attack: 65,
            defense: 80,
            spattack: 160,
            spdefense: 115,
            speed: 120,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}