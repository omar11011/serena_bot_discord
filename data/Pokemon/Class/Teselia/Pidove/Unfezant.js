const Base = require('./Tranquill').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 521
        this.pokemon = 'Unfezant'
        this.peso = 29
        this.altura = 1.2
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('tornado'), 1],
            [move.get('ataque rápido'), 11],
            [move.get('aire afilado'), 15],
            [move.get('tajo aéreo'), 33],
            [move.get('viento cortante'), 38],
            [move.get('imagen'), 55],
            [move.get('tajo aéreo'), 66],
        ]
        this.stats = {
            hp: 80,
            attack: 115,
            defense: 80,
            spattack: 65,
            spdefense: 55,
            speed: 93,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}