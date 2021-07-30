const Base = require('../Chandelure').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Chandelure'
        this.peso = 40
        this.altura = 1.2
        this.evolucion = []
        this.stats = {
            hp: 80,
            attack: 55,
            defense: 100,
            spattack: 175,
            spdefense: 100,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}