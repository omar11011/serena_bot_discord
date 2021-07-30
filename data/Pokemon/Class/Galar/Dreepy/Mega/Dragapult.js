const Base = require('../Dragapult').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Dragapult'
        this.peso = 55
        this.altura = 3.2
        this.evolucion = []
        this.stats = {
            hp: 98,
            attack: 150,
            defense: 85,
            spattack: 120,
            spdefense: 85,
            speed: 162,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}