const Base = require('../Bisharp').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Bisharp'
        this.peso = 80
        this.altura = 1.7
        this.evolucion = []
        this.stats = {
            hp: 85,
            attack: 145,
            defense: 120,
            spattack: 60,
            spdefense: 90,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}