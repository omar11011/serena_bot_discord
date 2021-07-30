const Base = require('../Flygon').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Flygon'
        this.peso = 90
        this.altura = 2.5
        this.evolucion = []
        this.stats = {
            hp: 100,
            attack: 120,
            defense: 80,
            spattack: 100,
            spdefense: 80,
            speed: 130,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}