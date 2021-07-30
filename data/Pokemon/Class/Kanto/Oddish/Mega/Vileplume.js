const Base = require('../Vileplume').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Vileplume'
        this.peso = 25
        this.altura = 1.8
        this.evolucion = []
        this.stats = {
            hp: 70,
            attack: 100,
            defense: 65,
            spattack: 100,
            spdefense: 80,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}