const Base = require('../Sableye').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Sableye'
        this.peso = 161
        this.evolucion = []
        this.stats = {
            hp: 50,
            attack: 85,
            defense: 125,
            spattack: 85,
            spdefense: 115,
            speed: 20,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}