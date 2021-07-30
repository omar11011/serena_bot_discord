const Base = require('../Gourgeist').class

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Gourgeist Extragrande'
        this.peso = 39
        this.altura = 1.7
        this.stats = {
            hp: 85,
            attack: 100,
            defense: 122,
            spattack: 58,
            spdefense: 75,
            speed: 54,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}