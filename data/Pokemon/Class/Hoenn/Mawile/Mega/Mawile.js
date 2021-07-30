const Base = require('../Mawile').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Mawile'
        this.peso = 23.5
        this.altura = 1
        this.evolucion = []
        this.stats = {
            hp: 50,
            attack: 105,
            defense: 125,
            spattack: 55,
            spdefense: 95,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}