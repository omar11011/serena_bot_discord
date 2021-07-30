const Base = require('./Yamper').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 836
        this.pokemon = 'Boltund'
        this.peso = 34
        this.altura = 1
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('moflete estático'), 5],
            [move.get('mordisco'), 10],
            [move.get('chispa'), 20],
            [move.get('triturar'), 34],
            [move.get('voltio cruel'), 48],
            [move.get('carantoña'), 55],
        ]
        this.stats = {
            hp: 69,
            attack: 90,
            defense: 60,
            spattack: 90,
            spdefense: 60,
            speed: 121,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}