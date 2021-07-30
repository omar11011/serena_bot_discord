const Base = require('../Basculin').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = true
        this.pokedex = false
        this.pokemon = 'Basculin Raya Roja'
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}