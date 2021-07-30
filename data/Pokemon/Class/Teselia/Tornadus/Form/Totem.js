const Base = require('../Tornadus').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Tornadus Forma Totem'
        this.altura = 1.4
        this.evolucion = []
        this.stats = {
            hp: 79,
            attack: 100,
            defense: 80,
            spattack: 110,
            spdefense: 90,
            speed: 121,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}