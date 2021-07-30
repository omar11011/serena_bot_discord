const Base = require('../Tyranitar').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Tyranitar'
        this.peso = 255
        this.altura = 2.5
        this.evolucion = []
        this.stats = {
            hp: 100,
            attack: 164,
            defense: 150,
            spattack: 95,
            spdefense: 120,
            speed: 71,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}