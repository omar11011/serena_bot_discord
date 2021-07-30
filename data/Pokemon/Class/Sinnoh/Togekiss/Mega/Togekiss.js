const Base = require('../Togekiss').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Togekiss'
        this.evolucion = []
        this.stats = {
            hp: 105,
            attack: 50,
            defense: 95,
            spattack: 160,
            spdefense: 115,
            speed: 120,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}