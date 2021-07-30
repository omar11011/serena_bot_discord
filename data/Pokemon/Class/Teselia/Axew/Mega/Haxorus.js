const Base = require('../Haxorus').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Haxorus'
        this.peso = 116
        this.altura = 2.1
        this.evolucion = []
        this.stats = {
            hp: 86,
            attack: 177,
            defense: 110,
            spattack: 60,
            spdefense: 80,
            speed: 117,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}