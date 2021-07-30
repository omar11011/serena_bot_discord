const Base = require('../Wishiwashi').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Wishiwashi Forma Banco'
        this.peso = 78.6
        this.altura = 8.2
        this.evolucion = []
        this.stats = {
            hp: 45,
            attack: 140,
            defense: 130,
            spattack: 140,
            spdefense: 135,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}