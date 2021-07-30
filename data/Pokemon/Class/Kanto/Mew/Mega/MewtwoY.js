const Base = require('../Mewtwo').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Mewtwo Y'
        this.peso = 33
        this.altura = 1.5
        this.evolucion = []
        this.stats = {
            hp: 106,
            attack: 150,
            defense: 70,
            spattack: 194,
            spdefense: 120,
            speed: 140,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}