const Base = require('../Sharpedo').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Sharpedo'
        this.peso = 130.3
        this.altura = 2.5
        this.evolucion = []
        this.stats = {
            hp: 70,
            attack: 140,
            defense: 70,
            spattack: 110,
            spdefense: 65,
            speed: 105,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}