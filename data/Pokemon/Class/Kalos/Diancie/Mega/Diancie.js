const Base = require('../Diancie').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Diancie'
        this.peso = 27.8
        this.altura = 1.1
        this.evolucion = []
        this.stats = {
            hp: 50,
            attack: 160,
            defense: 110,
            spattack: 160,
            spdefense: 110,
            speed: 110,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}