const Base = require('../Glaceon').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Glaceon'
        this.peso = 28
        this.altura = 0.9
        this.evolucion = []
        this.stats = {
            hp: 75,
            attack: 60,
            defense: 130,
            spattack: 170,
            spdefense: 115,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}