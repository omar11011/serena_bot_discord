const Base = require('../Houndoom').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Houndoom'
        this.peso = 49.5
        this.altura = 1.9
        this.evolucion = []
        this.stats = {
            hp: 75,
            attack: 90,
            defense: 90,
            spattack: 140,
            spdefense: 90,
            speed: 115,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}