const Base = require('./Cottonee').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 547
        this.pokemon = 'Whimsicott'
        this.peso = 6.6
        this.altura = 0.7
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('viento feérico'), 1],
            [move.get('tornado'), 1],
            [move.get('megaagotar'), 13],
            [move.get('hoja afilada'), 19],
            [move.get('gigadrenado'), 26],
            [move.get('energibola'), 35],
            [move.get('vendaval'), 46],
            [move.get('fuerza lunar'), 50],
        ]
        this.stats = {
            hp: 60,
            attack: 67,
            defense: 85,
            spattack: 77,
            spdefense: 75,
            speed: 116,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}