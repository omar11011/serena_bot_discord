const Base = require('../Deoxys').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Deoxys Forma Velocidad'
        this.evolucion = []
        this.stats = {
            hp: 50,
            attack: 95,
            defense: 90,
            spattack: 95,
            spdefense: 90,
            speed: 180,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}