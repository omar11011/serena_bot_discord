const Base = require('../Landorus').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Landorus Forma Totem'
        this.altura = 1.3
        this.evolucion = []
        this.stats = {
            hp: 89,
            attack: 145,
            defense: 90,
            spattack: 105,
            spdefense: 80,
            speed: 91,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}