const Base = require('../Eternatus').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Eternatus Dinamax Infinito'
        this.peso = '???'
        this.altura = 100
        this.evolucion = []
        this.stats = {
            hp: 250,
            attack: 115,
            defense: 250,
            spattack: 125,
            spdefense: 250,
            speed: 130,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}