const Base = require('./Chinchou').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 171
        this.pokemon = 'Lanturn'
        this.peso = 22.5
        this.altura = 1.2
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('burbuja'), 1],
            [move.get('escupir'), 1],
            [move.get('bola voltio'), 9],
            [move.get('pistola agua'), 12],
            [move.get('rayo burbuja'), 20],
            [move.get('chispa'), 23],
            [move.get('doble rayo'), 29],
            [move.get('azote'), 33],
            [move.get('chispazo'), 37],
            [move.get('derribo'), 43],
            [move.get('hidrobomba'), 51],
        ]
        this.stats = {
            hp: 125,
            attack: 58,
            defense: 58,
            spattack: 76,
            spdefense: 76,
            speed: 67,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}