const Base = require('./Gurdurr').class

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 534
        this.pokemon = 'Conkeldurr'
        this.peso = 87
        this.altura = 1.4
        this.evolucion = []
        this.captura = 45
        this.stats = {
            hp: 105,
            attack: 140,
            defense: 95,
            spattack: 55,
            spdefense: 65,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}