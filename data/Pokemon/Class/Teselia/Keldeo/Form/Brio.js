const Base = require('../Keldeo').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Keldeo Forma Brío'
        this.evolucion = []
        this.stats = {
            hp: 91,
            attack: 92,
            defense: 95,
            spattack: 129,
            spdefense: 95,
            speed: 128,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}