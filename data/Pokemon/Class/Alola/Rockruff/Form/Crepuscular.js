const Base = require('../Lycanroc').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = true
        this.pokedex = false
        this.pokemon = 'Lycanroc Crepuscular'
        this.stats = {
            hp: 75,
            attack: 117,
            defense: 65,
            spattack: 55,
            spdefense: 65,
            speed: 110,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}