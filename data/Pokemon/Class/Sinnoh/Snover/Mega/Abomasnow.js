const Base = require('../Abomasnow').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Abomasnow'
        this.peso = 185
        this.altura = 2.7
        this.evolucion = []
        this.stats = {
            hp: 90,
            attack: 132,
            defense: 105,
            spattack: 132,
            spdefense: 105,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}