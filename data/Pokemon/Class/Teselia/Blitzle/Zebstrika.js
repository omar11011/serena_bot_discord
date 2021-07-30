const Base = require('./Blitzle').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 523
        this.pokemon = 'Zebstrika'
        this.peso = 79.5
        this.altura = 1.6
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('ataque rápido'), 1],
            [move.get('onda voltio'), 11],
            [move.get('nitrocarga'), 18],
            [move.get('persecución'), 22],
            [move.get('chispa'), 25],
            [move.get('pisotón'), 31],
            [move.get('chispazo'), 36],
            [move.get('voltio cruel'), 47],
            [move.get('golpe'), 53],
        ]
        this.stats = {
            hp: 75,
            attack: 100,
            defense: 63,
            spattack: 80,
            spdefense: 63,
            speed: 116,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}