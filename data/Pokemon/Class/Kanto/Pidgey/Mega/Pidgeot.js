const Base = require('../Pidgeot').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Pidgeot'
        this.peso = 50.5
        this.altura = 2.2
        this.evolucion = []
        this.stats = {
            hp: 83,
            attack: 80,
            defense: 80,
            spattack: 135,
            spdefense: 80,
            speed: 121,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}