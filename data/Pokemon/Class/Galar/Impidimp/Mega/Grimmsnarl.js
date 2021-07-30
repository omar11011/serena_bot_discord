const Base = require('../Grimmsnarl').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Grimmsnarl'
        this.peso = 90
        this.altura = 1.9
        this.evolucion = []
        this.stats = {
            hp: 105,
            attack: 150,
            defense: 90,
            spattack: 95,
            spdefense: 85,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}