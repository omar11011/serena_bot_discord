const Base = require('../Gourgeist').class

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Gourgeist Grande'
        this.peso = 14
        this.altura = 1.1
        this.stats = {
            hp: 75,
            attack: 85,
            defense: 122,
            spattack: 58,
            spdefense: 75,
            speed: 69,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}