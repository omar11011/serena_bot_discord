const Base = require('../Banette').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Banette'
        this.peso = 13
        this.altura = 1.2
        this.evolucion = []
        this.stats = {
            hp: 64,
            attack: 165,
            defense: 75,
            spattack: 93,
            spdefense: 83,
            speed: 75,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}