const Base = require('../Absol').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Absol'
        this.peso = 49
        this.evolucion = []
        this.stats = {
            hp: 65,
            attack: 150,
            defense: 60,
            spattack: 115,
            spdefense: 60,
            speed: 115,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}