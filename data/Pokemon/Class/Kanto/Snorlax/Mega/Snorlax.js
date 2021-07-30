const Base = require('../Snorlax').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Snorlax'
        this.evolucion = []
        this.stats = {
            hp: 170,
            attack: 140,
            defense: 85,
            spattack: 65,
            spdefense: 120,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}