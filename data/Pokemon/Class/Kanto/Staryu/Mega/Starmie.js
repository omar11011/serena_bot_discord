const Base = require('../Starmie').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Starmie'
        this.peso = 100
        this.altura = 1.5
        this.evolucion = []
        this.stats = {
            hp: 70,
            attack: 80,
            defense: 100,
            spattack: 90,
            spdefense: 90,
            speed: 120,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}