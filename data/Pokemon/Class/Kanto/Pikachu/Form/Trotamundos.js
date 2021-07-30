const Base = require('./Ash').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.redeem = true
        this.pokemon = 'Pikachu Gorra Trotamundos'
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}