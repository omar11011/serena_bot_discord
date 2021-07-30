const Base = require('../Squirtle').class

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Flow Squirtle'
        this.stats = {
            hp: 54,
            attack: 58,
            defense: 70,
            spattack: 60,
            spdefense: 69,
            speed: 53,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}