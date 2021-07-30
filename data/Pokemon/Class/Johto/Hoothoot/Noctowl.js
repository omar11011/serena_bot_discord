const Base = require('./Hoothoot').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 164
        this.pokemon = 'Noctowl'
        this.peso = 40.8
        this.altura = 1.6
        this.evolucion = []
        this.captura = 90
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('picotazo'), 7],
            [move.get('confusión'), 10],
            [move.get('eco voz'), 13],
            [move.get('cabezazo zen'), 16],
            [move.get('paranormal'), 23],
            [move.get('derribo'), 27],
            [move.get('tajo aéreo'), 35],
            [move.get('alboroto'), 39],
            [move.get('fuerza lunar'), 47],
            [move.get('sincorruido'), 51],
            [move.get('come sueños'), 55],
        ]
        this.stats = {
            hp: 100,
            attack: 50,
            defense: 50,
            spattack: 86,
            spdefense: 96,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}