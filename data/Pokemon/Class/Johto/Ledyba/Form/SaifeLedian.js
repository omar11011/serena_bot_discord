const Base = require('./SaifeLedyba').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 166
        this.pokemon = 'Ledian de Saife'
        this.peso = 40
        this.altura = 1.4
        this.evolucion = []
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('confusión'), 1],
            [move.get('golpe kárate'), 8],
            [move.get('ultra puño'), 15],
            [move.get('viento plata'), 20],
            [move.get('puño cometa'), 24],
            [move.get('zumbido'), 38],
            [move.get('a bocajarro'), 42],
            [move.get('doble filo'), 47],
        ]
        this.stats = {
            hp: 55,
            attack: 55,
            defense: 110,
            spattack: 35,
            spdefense: 50,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}