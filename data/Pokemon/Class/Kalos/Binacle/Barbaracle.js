const Base = require('./Binacle').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 689
        this.pokemon = 'Barbaracle'
        this.peso = 96
        this.altura = 1.3
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('pistola agua'), 4],
            [move.get('golpes furia'), 10],
            [move.get('cuchillada'), 13],
            [move.get('bofetón lodo'), 18],
            [move.get('tenaza'), 20],
            [move.get('poder pasado'), 28],
            [move.get('corte furia'), 37],
            [move.get('tajo umbrío'), 44],
            [move.get('concha filo'), 48],
            [move.get('tajo cruzado'), 55],
            [move.get('roca afilada'), 60],
            [move.get('cabezazo'), 65],
        ]
        this.stats = {
            hp: 72,
            attack: 105,
            defense: 115,
            spattack: 54,
            spdefense: 86,
            speed: 68,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}