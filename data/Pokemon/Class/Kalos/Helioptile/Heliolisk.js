const Base = require('./Helioptile').class

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 695
        this.pokemon = 'Heliolisk'
        this.peso = 21
        this.altura = 1
        this.evolucion = []
        this.captura = 75
        this.stats = {
            hp: 62,
            attack: 55,
            defense: 52,
            spattack: 109,
            spdefense: 94,
            speed: 109,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}