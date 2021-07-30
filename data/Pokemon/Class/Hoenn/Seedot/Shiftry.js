const Base = require('./Nuzleaf').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 275
        this.pokemon = 'Shiftry'
        this.peso = 59.6
        this.altura = 1.3
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('finta'), 1],
            [move.get('hoja afilada'), 1],
            [move.get('ciclón de hojas'), 20],
            [move.get('vendaval'), 32],
            [move.get('lluevehojas'), 44],
        ]
        this.stats = {
            hp: 90,
            attack: 100,
            defense: 60,
            spattack: 90,
            spdefense: 60,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}