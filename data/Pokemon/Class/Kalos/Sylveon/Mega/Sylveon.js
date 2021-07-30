const Base = require('../Sylveon').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Sylveon'
        this.peso = 25
        this.altura = 1.1
        this.evolucion = []
        this.stats = {
            hp: 105,
            attack: 65,
            defense: 65,
            spattack: 150,
            spdefense: 140,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}