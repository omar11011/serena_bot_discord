const Base = require('../Alakazam').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Alakazam'
        this.peso = 48
        this.altura = 1.2
        this.evolucion = []
        this.stats = {
            hp: 55,
            attack: 50,
            defense: 65,
            spattack: 175,
            spdefense: 105,
            speed: 150,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}