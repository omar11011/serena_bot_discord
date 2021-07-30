const Base = require('../Saife/Tyranitar').class

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokemon = 'Mega Tyranitar de Saife'
        this.peso = 255
        this.altura = 2.5
        this.evolucion = []
        this.stats = {
            hp: 100,
            attack: 164,
            defense: 160,
            spattack: 95,
            spdefense: 130,
            speed: 71,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}