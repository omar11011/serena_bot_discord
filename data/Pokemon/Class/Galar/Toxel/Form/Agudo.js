const Base = require('../Toxtricity').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = true
        this.pokedex = false
        this.pokemon = 'Toxtricity Agudo'
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}