const Base = require('./Palpitoad').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 537
        this.pokemon = 'Seismitoad'
        this.peso = 62
        this.altura = 1.5
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('burbuja'), 1],
            [move.get('canon'), 9],
            [move.get('rayo burbuja'), 12],
            [move.get('disparo lodo'), 16],
            [move.get('alboroto'), 23],
            [move.get('agua lodosa'), 28],
            [move.get('azote'), 39],
            [move.get('puño drenaje'), 44],
            [move.get('eco voz'), 49],
            [move.get('hidrobomba'), 53],
            [move.get('vozarrón'), 59],
        ]
        this.stats = {
            hp: 105,
            attack: 95,
            defense: 75,
            spattack: 85,
            spdefense: 75,
            speed: 74,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}