const Base = require('./Floette').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 671
        this.pokemon = 'Florges'
        this.peso = 10
        this.altura = 1.1
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('látigo cepa'), 1],
            [move.get('voz cautivadora'), 1],
            [move.get('viento feérico'), 6],
            [move.get('hoja afilada'), 15],
            [move.get('hoja mágica'), 25],
            [move.get('tormenta floral'), 33],
            [move.get('fuerza lunar'), 46],
            [move.get('danza pétalo'), 51],
            [move.get('rayo solar'), 58],
        ]
        this.stats = {
            hp: 78,
            attack: 65,
            defense: 68,
            spattack: 112,
            spdefense: 154,
            speed: 75,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}