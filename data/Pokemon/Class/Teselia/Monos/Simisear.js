const Base = require('./Pansear').class

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 514
        this.pokemon = 'Simisear'
        this.peso = 28
        this.altura = 1
        this.evolucion = []
        this.captura = 75
        this.stats = {
            hp: 75,
            attack: 98,
            defense: 63,
            spattack: 98,
            spdefense: 63,
            speed: 101,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}