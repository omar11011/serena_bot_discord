const Base = require('../Lunala').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Lunala Luna Llena'
        this.peso = 130
        this.altura = 3.3
        this.evolucion = []
        this.stats = {
            hp: 147,
            attack: 123,
            defense: 99,
            spattack: 167,
            spdefense: 117,
            speed: 117,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}