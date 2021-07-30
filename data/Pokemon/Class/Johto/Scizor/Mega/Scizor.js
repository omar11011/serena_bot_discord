const Base = require('../Scizor').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Scizor'
        this.peso = 125
        this.altura = 2
        this.evolucion = []
        this.stats = {
            hp: 70,
            attack: 150,
            defense: 140,
            spattack: 65,
            spdefense: 100,
            speed: 75,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}