const Base = require('../Swampert').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Swampert'
        this.peso = 102
        this.altura = 1.9
        this.evolucion = []
        this.stats = {
            hp: 100,
            attack: 150,
            defense: 110,
            spattack: 95,
            spdefense: 110,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}