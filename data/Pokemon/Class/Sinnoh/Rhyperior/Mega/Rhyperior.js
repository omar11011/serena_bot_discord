const Base = require('../Rhyperior').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Rhyperior'
        this.peso = 290
        this.altura = 2.8
        this.evolucion = []
        this.stats = {
            hp: 115,
            attack: 180,
            defense: 150,
            spattack: 55,
            spdefense: 75,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}