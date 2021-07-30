const Base = require('../Kangaskhan').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Kangaskhan'
        this.peso = 100
        this.evolucion = []
        this.stats = {
            hp: 105,
            attack: 125,
            defense: 100,
            spattack: 60,
            spdefense: 100,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}