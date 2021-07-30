const Base = require('../Meloetta').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = true
        this.pokedex = false
        this.pokemon = 'Meloetta Forma Lírica'
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}