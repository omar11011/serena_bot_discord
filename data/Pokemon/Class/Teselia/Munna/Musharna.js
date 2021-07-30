const Base = require('./Munna').class

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 517
        this.pokemon = 'Musharna'
        this.peso = 60.5
        this.altura = 1.1
        this.evolucion = []
        this.captura = 75
        this.stats = {
            hp: 116,
            attack: 55,
            defense: 85,
            spattack: 117,
            spdefense: 95,
            speed: 29,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}