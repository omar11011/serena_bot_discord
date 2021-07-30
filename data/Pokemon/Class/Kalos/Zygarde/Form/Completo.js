const Base = require('../Zygarde').class

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Zygarde Completo'
        this.peso = 610
        this.altura = 4.5
        this.evolucion = []
        this.stats = {
            hp: 216,
            attack: 100,
            defense: 121,
            spattack: 91,
            spdefense: 95,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}