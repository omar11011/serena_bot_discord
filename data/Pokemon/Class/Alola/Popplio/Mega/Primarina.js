const Base = require('../Primarina').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Primarina'
        this.peso = 48
        this.altura = 1.9
        this.evolucion = []
        this.stats = {
            hp: 80,
            attack: 74,
            defense: 94,
            spattack: 156,
            spdefense: 126,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}