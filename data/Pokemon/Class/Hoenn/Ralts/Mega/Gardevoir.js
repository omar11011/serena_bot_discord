const Base = require('../Gardevoir').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Gardevoir'
        this.evolucion = []
        this.stats = {
            hp: 68,
            attack: 85,
            defense: 65,
            spattack: 165,
            spdefense: 135,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}