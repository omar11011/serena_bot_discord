const Base = require('../Deoxys').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Deoxys Forma Ataque'
        this.evolucion = []
        this.stats = {
            hp: 50,
            attack: 180,
            defense: 20,
            spattack: 180,
            spdefense: 20,
            speed: 150,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}