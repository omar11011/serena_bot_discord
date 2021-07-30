const Base = require('../Charizard').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Charizard Y'
        this.peso = 100.5
        this.evolucion = []
        this.stats = {
            hp: 78,
            attack: 104,
            defense: 78,
            spattack: 159,
            spdefense: 115,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}