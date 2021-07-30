const Base = require('./Inkay').class

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 687
        this.pokemon = 'Malamar'
        this.peso = 47
        this.altura = 1.5
        this.evolucion = []
        this.captura = 95
        this.stats = {
            hp: 86,
            attack: 92,
            defense: 88,
            spattack: 68,
            spdefense: 75,
            speed: 73,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}