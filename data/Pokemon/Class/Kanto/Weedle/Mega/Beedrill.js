const Base = require('../Beedrill').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Beedrill'
        this.peso = 40.5
        this.altura = 1.4
        this.evolucion = []
        this.stats = {
            hp: 65,
            attack: 150,
            defense: 40,
            spattack: 15,
            spdefense: 80,
            speed: 145,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}