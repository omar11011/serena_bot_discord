const Base = require('../Mew').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Mew'
        this.peso = 6
        this.altura = 0.8
        this.evolucion = []
        this.stats = {
            hp: 100,
            attack: 110,
            defense: 110,
            spattack: 150,
            spdefense: 110,
            speed: 120,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}