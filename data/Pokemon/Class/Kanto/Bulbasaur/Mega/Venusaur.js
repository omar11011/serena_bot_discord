const Base = require('../Venusaur').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Venusaur'
        this.peso = 155.5
        this.altura = 2.4
        this.evolucion = []
        this.stats = {
            hp: 80,
            attack: 100,
            defense: 123,
            spattack: 122,
            spdefense: 120,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}