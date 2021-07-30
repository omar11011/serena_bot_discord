const Base = require('../Aegislash').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Aegislash Forma Escudo'
        this.evolucion = []
        this.stats = {
            hp: 60,
            attack: 50,
            defense: 140,
            spattack: 50,
            spdefense: 140,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}