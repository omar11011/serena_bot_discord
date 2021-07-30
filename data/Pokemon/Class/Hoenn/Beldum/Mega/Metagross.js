const Base = require('../Metagross').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Metagross'
        this.peso = 942
        this.altura = 2.5
        this.evolucion = []
        this.stats = {
            hp: 80,
            attack: 145,
            defense: 150,
            spattack: 105,
            spdefense: 110,
            speed: 110,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}