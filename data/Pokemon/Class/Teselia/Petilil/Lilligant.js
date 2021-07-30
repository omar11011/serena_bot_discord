const Base = require('./Petilil').class

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 549
        this.pokemon = 'Lilligant'
        this.peso = 16.3
        this.altura = 1.1
        this.evolucion = []
        this.captura = 75
        this.stats = {
            hp: 70,
            attack: 60,
            defense: 75,
            spattack: 110,
            spdefense: 75,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}