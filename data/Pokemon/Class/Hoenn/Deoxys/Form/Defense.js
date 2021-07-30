const Base = require('../Deoxys').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Deoxys Forma Defensa'
        this.evolucion = []
        this.stats = {
            hp: 50,
            attack: 70,
            defense: 160,
            spattack: 70,
            spdefense: 160,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}