const Base = require('../Gallade').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Gallade'
        this.peso = 56.4
        this.evolucion = []
        this.stats = {
            hp: 68,
            attack: 165,
            defense: 95,
            spattack: 65,
            spdefense: 115,
            speed: 110,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}