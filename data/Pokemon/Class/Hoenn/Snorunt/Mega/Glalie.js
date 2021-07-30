const Base = require('../Glalie').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Glalie'
        this.peso = 350
        this.altura = 2.1
        this.evolucion = []
        this.stats = {
            hp: 80,
            attack: 120,
            defense: 80,
            spattack: 120,
            spdefense: 80,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}