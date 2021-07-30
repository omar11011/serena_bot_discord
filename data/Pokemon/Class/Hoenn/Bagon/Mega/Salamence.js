const Base = require('../Salamence').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Salamence'
        this.peso = 112.6
        this.altura = 1.8
        this.evolucion = []
        this.stats = {
            hp: 95,
            attack: 145,
            defense: 130,
            spattack: 120,
            spdefense: 90,
            speed: 120,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}