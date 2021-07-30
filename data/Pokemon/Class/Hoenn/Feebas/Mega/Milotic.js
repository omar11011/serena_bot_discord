const Base = require('../Milotic').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Milotic'
        this.peso = 180
        this.altura = 7
        this.evolucion = []
        this.stats = {
            hp: 105,
            attack: 100,
            defense: 99,
            spattack: 100,
            spdefense: 125,
            speed: 111,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}