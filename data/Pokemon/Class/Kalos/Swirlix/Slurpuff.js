const Base = require('./Swirlix').class

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 685
        this.pokemon = 'Slurpuff'
        this.peso = 5
        this.altura = 0.8
        this.evolucion = []
        this.captura = 140
        this.stats = {
            hp: 82,
            attack: 80,
            defense: 86,
            spattack: 85,
            spdefense: 75,
            speed: 72,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}