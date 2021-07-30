const Base = require('../Steelix').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Steelix de Cristal'
        this.peso = 740
        this.altura = 10.5
        this.evolucion = []
        this.stats = {
            hp: 75,
            attack: 125,
            defense: 230,
            spattack: 55,
            spdefense: 95,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}