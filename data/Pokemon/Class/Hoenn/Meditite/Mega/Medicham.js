const Base = require('../Medicham').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Medicham'
        this.evolucion = []
        this.captura = 90
        this.stats = {
            hp: 60,
            attack: 100,
            defense: 85,
            spattack: 80,
            spdefense: 85,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}