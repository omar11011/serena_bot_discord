const Base = require('../Staraptor').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Staraptor'
        this.peso = 32
        this.altura = 1.8
        this.evolucion = []
        this.stats = {
            hp: 90,
            attack: 150,
            defense: 100,
            spattack: 50,
            spdefense: 60,
            speed: 120,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}