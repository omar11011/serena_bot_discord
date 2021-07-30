const Base = require('../Rampardos').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Rampardos'
        this.peso = 150
        this.altura = 2
        this.evolucion = []
        this.stats = {
            hp: 107,
            attack: 185,
            defense: 100,
            spattack: 65,
            spdefense: 90,
            speed: 48,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}