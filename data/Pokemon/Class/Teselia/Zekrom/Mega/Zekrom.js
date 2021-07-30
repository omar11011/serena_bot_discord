const Base = require('../Zekrom').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Zekrom'
        this.peso = 340
        this.altura = 3.1
        this.evolucion = []
        this.stats = {
            hp: 100,
            attack: 180,
            defense: 130,
            spattack: 130,
            spdefense: 110,
            speed: 120,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}