const Base = require('./Gothorita').class

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 576
        this.pokemon = 'Gothitelle'
        this.peso = 44
        this.altura = 1.5
        this.evolucion = []
        this.captura = 50
        this.stats = {
            hp: 70,
            attack: 55,
            defense: 95,
            spattack: 95,
            spdefense: 110,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}