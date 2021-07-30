const Base = require('../Leafeon').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Leafeon'
        this.peso = 30
        this.altura = 1.2
        this.evolucion = []
        this.stats = {
            hp: 85,
            attack: 150,
            defense: 130,
            spattack: 65,
            spdefense: 70,
            speed: 125,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}