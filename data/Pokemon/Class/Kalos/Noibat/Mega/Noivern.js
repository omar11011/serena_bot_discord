const Base = require('../Noivern').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Noivern'
        this.peso = 95
        this.altura = 2
        this.evolucion = []
        this.stats = {
            hp: 95,
            attack: 80,
            defense: 95,
            spattack: 117,
            spdefense: 95,
            speed: 143,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}