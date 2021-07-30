const Base = require('../Manectric').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Manectric'
        this.peso = 44
        this.altura = 1.8
        this.evolucion = []
        this.stats = {
            hp: 70,
            attack: 75,
            defense: 80,
            spattack: 135,
            spdefense: 80,
            speed: 135,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}