const Base = require('../Pikachu').class

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Pikachu Roquera'
        this.probMacho = 0
        this.probHembra = 1
        this.evolucion = []
        this.captura = 70
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}