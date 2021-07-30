const Base = require('./Woobat').class

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 528
        this.pokemon = 'Swoobat'
        this.peso = 10.5
        this.altura = 0.9
        this.evolucion = []
        this.captura = 45
        this.stats = {
            hp: 67,
            attack: 57,
            defense: 55,
            spattack: 77,
            spdefense: 55,
            speed: 114,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}