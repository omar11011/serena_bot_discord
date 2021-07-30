const Base = require('../Blaziken').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Blaziken'
        this.evolucion = []
        this.stats = {
            hp: 80,
            attack: 160,
            defense: 80,
            spattack: 130,
            spdefense: 80,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}