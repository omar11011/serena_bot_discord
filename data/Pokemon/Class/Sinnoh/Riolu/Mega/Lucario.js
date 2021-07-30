const Base = require('../Lucario').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Lucario'
        this.peso = 57.5
        this.altura = 1.3
        this.evolucion = []
        this.stats = {
            hp: 70,
            attack: 145,
            defense: 88,
            spattack: 140,
            spdefense: 70,
            speed: 112,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}