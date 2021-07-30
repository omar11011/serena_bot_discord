const Base = require('../Umbreon').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Umbreon'
        this.peso = 27
        this.altura = 1
        this.evolucion = []
        this.stats = {
            hp: 100,
            attack: 115,
            defense: 130,
            spattack: 60,
            spdefense: 150,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}