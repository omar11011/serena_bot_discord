const Base = require('../Slowbro').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Slowbro'
        this.peso = 120
        this.altura = 2
        this.evolucion = []
        this.stats = {
            hp: 95,
            attack: 75,
            defense: 180,
            spattack: 130,
            spdefense: 80,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}