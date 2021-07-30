const Base = require('../Lapras').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Lapras'
        this.peso = 130
        this.altura = 2.8
        this.evolucion = []
        this.stats = {
            hp: 160,
            attack: 105,
            defense: 100,
            spattack: 105,
            spdefense: 85,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}