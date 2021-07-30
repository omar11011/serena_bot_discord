const Base = require('../Delphox').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Mega Delphox'
        this.peso = 41
        this.altura = 1.6
        this.evolucion = []
        this.stats = {
            hp: 95,
            attack: 69,
            defense: 92,
            spattack: 134,
            spdefense: 110,
            speed: 124,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}