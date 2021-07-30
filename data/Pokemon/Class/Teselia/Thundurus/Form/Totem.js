const Base = require('../Thundurus').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Thundurus Forma Totem'
        this.altura = 3
        this.evolucion = []
        this.stats = {
            hp: 79,
            attack: 105,
            defense: 70,
            spattack: 145,
            spdefense: 80,
            speed: 101,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}