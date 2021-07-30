const Base = require('../Gengar').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Gengar'
        this.altura = 1.4
        this.evolucion = []
        this.stats = {
            hp: 60,
            attack: 65,
            defense: 80,
            spattack: 170,
            spdefense: 95,
            speed: 130,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}