const Base = require('../Cloyster').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Cloyster'
        this.peso = 147.5
        this.altura = 1.6
        this.evolucion = []
        this.stats = {
            hp: 60,
            attack: 125,
            defense: 220,
            spattack: 85,
            spdefense: 65,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}