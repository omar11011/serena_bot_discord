const Base = require('../Butterfree').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Butterfree'
        this.peso = 35
        this.evolucion = []
        this.stats = {
            hp: 80,
            attack: 95,
            defense: 65,
            spattack: 90,
            spdefense: 100,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}