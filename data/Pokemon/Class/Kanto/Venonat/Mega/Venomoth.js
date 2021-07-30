const Base = require('../Venomoth').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Venomoth'
        this.peso = 15.5
        this.altura = 2.5
        this.evolucion = []
        this.stats = {
            hp: 90,
            attack: 65,
            defense: 70,
            spattack: 120,
            spdefense: 85,
            speed: 120,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}