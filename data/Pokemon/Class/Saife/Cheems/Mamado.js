const Base = require('./Cheems').class

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 904
        this.spawn = false
        this.redeem = true
        this.pokemon = 'Cheems Mamado'
        this.peso = 110
        this.altura = 3.5
        this.evolucion = []
        this.stats = {
            hp: 150,
            attack: 160,
            defense: 80,
            spattack: 10,
            spdefense: 80,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}