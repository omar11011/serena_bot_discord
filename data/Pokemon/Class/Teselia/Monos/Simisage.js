const Base = require('./Pansage').class

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 512
        this.pokemon = 'Simisage'
        this.peso = 30.5
        this.altura = 1.1
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