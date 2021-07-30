const Base = require('../Hydreigon').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Hydreigon'
        this.peso = 165
        this.evolucion = []
        this.stats = {
            hp: 107,
            attack: 125,
            defense: 100,
            spattack: 145,
            spdefense: 100,
            speed: 113,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}