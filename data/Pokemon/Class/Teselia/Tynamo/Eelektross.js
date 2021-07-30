const Base = require('./Eelektrik').class

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 604
        this.pokemon = 'Eelektross'
        this.peso = 85
        this.altura = 2.1
        this.evolucion = []
        this.captura = 30
        this.stats = {
            hp: 85,
            attack: 115,
            defense: 80,
            spattack: 105,
            spdefense: 80,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}