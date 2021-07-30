const Base = require('../Raichu').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Raichu'
        this.peso = 30
        this.altura = 1
        this.evolucion = []
        this.stats = {
            hp: 70,
            attack: 110,
            defense: 65,
            spattack: 125,
            spdefense: 90,
            speed: 120,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}