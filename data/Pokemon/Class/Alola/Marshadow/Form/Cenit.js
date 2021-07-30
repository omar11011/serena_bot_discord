const Base = require('../Marshadow').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Marshadow Forma Cénit'
        this.evolucion = []
        this.stats = {
            hp: 100,
            attack: 135,
            defense: 90,
            spattack: 100,
            spdefense: 100,
            speed: 130,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}