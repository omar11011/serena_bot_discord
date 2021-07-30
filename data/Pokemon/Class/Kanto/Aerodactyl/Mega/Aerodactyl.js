const Base = require('../Aerodactyl').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Aerodactyl'
        this.peso = 79
        this.altura = 2.1
        this.evolucion = []
        this.stats = {
            hp: 80,
            attack: 135,
            defense: 85,
            spattack: 70,
            spdefense: 95,
            speed: 150,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}