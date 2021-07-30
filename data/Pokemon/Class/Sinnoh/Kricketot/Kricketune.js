const Base = require('./Kricketot').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 402
        this.pokemon = 'Kricketune'
        this.peso = 25.1
        this.altura = 1
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('corte furia'), 10],
            [move.get('chupavidas'), 14],
            [move.get('cuchillada'), 26],
            [move.get('tijera x'), 30],
            [move.get('aguijón letal'), 36],
            [move.get('tajo umbrío'), 42],
            [move.get('zumbido'), 46],
        ]
        this.stats = {
            hp: 77,
            attack: 85,
            defense: 51,
            spattack: 55,
            spdefense: 51,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}