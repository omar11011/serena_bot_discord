const Base = require('./Foongus').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 591
        this.pokemon = 'Amoonguss'
        this.peso = 10.5
        this.altura = 0.6
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('absorber'), 1],
            [move.get('impresionar'), 8],
            [move.get('megaagotar'), 15],
            [move.get('finta'), 20],
            [move.get('gigadrenado'), 28],
            [move.get('niebla clara'), 43],
            [move.get('rayo solar'), 49],
        ]
        this.stats = {
            hp: 114,
            attack: 85,
            defense: 70,
            spattack: 85,
            spdefense: 80,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}