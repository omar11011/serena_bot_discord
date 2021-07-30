const Base = require('./Koffing').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 110
        this.pokemon = 'Weezing'
        this.peso = 9.5
        this.altura = 1.2
        this.evolucion = []
        this.captura = 60
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('polución'), 4],
            [move.get('furia'), 8],
            [move.get('buena baza'), 12],
            [move.get('niebla clara'), 15],
            [move.get('residuos'), 18],
            [move.get('giro bola'), 29],
            [move.get('bomba lodo'), 34],
            [move.get('tóxico'), 37],
            [move.get('eructo'), 51],
        ]
        this.stats = {
            hp: 65,
            attack: 90,
            defense: 120,
            spattack: 85,
            spdefense: 70,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}