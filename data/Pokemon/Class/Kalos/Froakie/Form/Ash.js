const Base = require('../Greninja').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Greninja Ash'
        this.evolucion = []
        this.stats = {
            hp: 72,
            attack: 145,
            defense: 67,
            spattack: 153,
            spdefense: 71,
            speed: 132,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}