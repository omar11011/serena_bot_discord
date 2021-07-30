const Base = require('../Camerupt').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Camerupt'
        this.peso = 320
        this.altura = 2.5
        this.evolucion = []
        this.stats = {
            hp: 70,
            attack: 120,
            defense: 100,
            spattack: 145,
            spdefense: 105,
            speed: 20,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}