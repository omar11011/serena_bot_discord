const Base = require('./Boldore').class

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 526
        this.pokemon = 'Gigalith'
        this.peso = 260
        this.altura = 1.7
        this.evolucion = []
        this.captura = 45
        this.stats = {
            hp: 85,
            attack: 135,
            defense: 130,
            spattack: 60,
            spdefense: 80,
            speed: 25,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}