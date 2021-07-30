const Base = require('../Gourgeist').class

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Gourgeist Pequeño'
        this.peso = 9.5
        this.altura = 0.7
        this.stats = {
            hp: 55,
            attack: 85,
            defense: 122,
            spattack: 58,
            spdefense: 75,
            speed: 99,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}