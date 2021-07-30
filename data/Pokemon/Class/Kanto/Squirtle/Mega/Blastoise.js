const Base = require('../Blastoise').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Blastoise'
        this.peso = 101.1
        this.evolucion = []
        this.stats = {
            hp: 79,
            attack: 103,
            defense: 120,
            spattack: 135,
            spdefense: 115,
            speed: 78,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}