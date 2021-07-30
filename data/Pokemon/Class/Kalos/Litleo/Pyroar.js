const Base = require('./Litleo').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 668
        this.pokemon = 'Pyroar'
        this.peso = 81.5
        this.altura = 1.5
        this.evolucion = []
        this.captura = 65
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('ascuas'), 5],
            [move.get('golpe cabeza'), 11],
            [move.get('derribo'), 20],
            [move.get('colmillo ígneo'), 23],
            [move.get('esfuerzo'), 28],
            [move.get('eco voz'), 33],
            [move.get('lanzallamas'), 38],
            [move.get('triturar'), 42],
            [move.get('vozarrón'), 48],
            [move.get('calcinación'), 51],
            [move.get('sofoco'), 57],
            [move.get('hiperrayo'), 62],
        ]
        this.stats = {
            hp: 86,
            attack: 68,
            defense: 72,
            spattack: 109,
            spdefense: 66,
            speed: 106,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}