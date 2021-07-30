const Base = require('../Garchomp').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Garchomp'
        this.evolucion = []
        this.stats = {
            hp: 108,
            attack: 170,
            defense: 120,
            spattack: 95,
            spdefense: 92,
            speed: 102,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}