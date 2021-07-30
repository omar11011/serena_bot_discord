const Base = require('../Solgaleo').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Solgaleo Sol Ascendente'
        this.peso = 240
        this.altura = 3.8
        this.evolucion = []
        this.stats = {
            hp: 147,
            attack: 167,
            defense: 117,
            spattack: 123,
            spdefense: 99,
            speed: 117,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}