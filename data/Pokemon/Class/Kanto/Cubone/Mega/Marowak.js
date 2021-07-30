const Base = require('../Marowak').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Marowak'
        this.peso = 50
        this.altura = 1.3
        this.evolucion = []
        this.stats = {
            hp: 65,
            attack: 100,
            defense: 100,
            spattack: 70,
            spdefense: 80,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}