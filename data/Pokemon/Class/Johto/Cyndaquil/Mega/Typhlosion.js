const Base = require('../Typhlosion').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Typhlosion'
        this.peso = 85
        this.altura = 2
        this.evolucion = []
        this.stats = {
            hp: 78,
            attack: 94,
            defense: 78,
            spattack: 159,
            spdefense: 95,
            speed: 130,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}