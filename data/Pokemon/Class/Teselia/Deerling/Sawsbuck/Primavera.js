const Base = require('../Sawsbuck').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = true
        this.pokedex = false
        this.pokemon = 'Sawsbuck Forma Primavera'
        this.evolucion = []
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}