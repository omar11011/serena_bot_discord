const Base = require('../Tyrantrum').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Tyrantrum'
        this.peso = 280
        this.altura = 2.8
        this.evolucion = []
        this.stats = {
            hp: 92,
            attack: 151,
            defense: 129,
            spattack: 69,
            spdefense: 99,
            speed: 81,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}