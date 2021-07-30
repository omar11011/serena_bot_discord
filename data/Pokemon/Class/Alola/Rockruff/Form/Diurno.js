const Base = require('../Lycanroc').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = true
        this.pokedex = false
        this.pokemon = 'Lycanroc Diurno'
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}