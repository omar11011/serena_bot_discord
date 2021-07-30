const Base = require('./Klang').class

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 601
        this.pokemon = 'Klinklang'
        this.peso = 81
        this.evolucion = []
        this.captura = 30
        this.stats = {
            hp: 60,
            attack: 100,
            defense: 115,
            spattack: 70,
            spdefense: 85,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}