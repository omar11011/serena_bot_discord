const Base = require('./AlolanPikachu').class

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 26
        this.pokemon = 'Raichu de Alola'
        this.peso = 21
        this.altura = 0.6
        this.captura = 75
        this.evolucion = []
        this.stats = {
            hp: 60,
            attack: 85,
            defense: 50,
            spattack: 95,
            spdefense: 85,
            speed: 110,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}