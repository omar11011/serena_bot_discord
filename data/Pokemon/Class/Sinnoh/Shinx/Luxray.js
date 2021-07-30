const Base = require('./Luxio').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 405
        this.pokemon = 'Luxray'
        this.peso = 42
        this.altura = 1.4
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('chispa'), 13],
            [move.get('mordisco'), 18],
            [move.get('cola férrea'), 30],
            [move.get('colmillo rayo'), 35],
            [move.get('triturar'), 42],
            [move.get('chispazo'), 56],
            [move.get('voltio cruel'), 63],
            [move.get('trueno'), 65],
        ]
        this.stats = {
            hp: 80,
            attack: 120,
            defense: 79,
            spattack: 95,
            spdefense: 79,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}