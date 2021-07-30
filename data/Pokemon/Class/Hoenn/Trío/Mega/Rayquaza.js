const Base = require('../Rayquaza').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Rayquaza'
        this.peso = 392
        this.altura = 10.8
        this.evolucion = []
        this.stats = {
            hp: 105,
            attack: 180,
            defense: 100,
            spattack: 180,
            spdefense: 100,
            speed: 115,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}