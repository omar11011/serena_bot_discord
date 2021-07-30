const Base = require('../Lugia').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Lugia'
        this.peso = 228
        this.altura = 5.7
        this.evolucion = []
        this.stats = {
            hp: 116,
            attack: 130,
            defense: 130,
            spattack: 130,
            spdefense: 154,
            speed: 130,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}