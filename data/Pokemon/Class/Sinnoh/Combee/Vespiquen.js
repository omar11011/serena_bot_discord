const Base = require('./Combee').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 416
        this.pokemon = 'Vespiquen'
        this.peso = 5.3
        this.altura = 0.3
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('tornado'), 1],
            [move.get('picotazo venenoso'), 1],
            [move.get('corte furia'), 5],
            [move.get('persecución'), 9],
            [move.get('golpes furia'), 13],
            [move.get('cuchillada'), 21],
            [move.get('joya de luz'), 25],
            [move.get('tajo aéreo'), 37],
            [move.get('al ataque'), 45],
            [move.get('aguijón letal'), 57],
        ]
        this.stats = {
            hp: 70,
            attack: 80,
            defense: 102,
            spattack: 80,
            spdefense: 102,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}