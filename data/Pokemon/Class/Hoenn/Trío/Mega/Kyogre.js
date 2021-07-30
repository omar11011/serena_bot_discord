const Base = require('../Kyogre').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Kyogre Primigenio'
        this.peso = 430
        this.altura = 9.8
        this.evolucion = []
        this.stats = {
            hp: 100,
            attack: 150,
            defense: 90,
            spattack: 180,
            spdefense: 160,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}