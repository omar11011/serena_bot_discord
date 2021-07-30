const Base = require('../Furret').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Furret Navideño'
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}