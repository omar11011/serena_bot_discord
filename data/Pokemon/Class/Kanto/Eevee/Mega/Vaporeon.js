const Base = require('../Vaporeon').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Vaporeon'
        this.peso = 33
        this.altura = 1.2
        this.evolucion = []
        this.stats = {
            hp: 130,
            attack: 70,
            defense: 65,
            spattack: 150,
            spdefense: 100,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}