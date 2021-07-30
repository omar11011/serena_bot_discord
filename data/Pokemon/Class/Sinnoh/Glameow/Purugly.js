const Base = require('./Glameow').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 432
        this.pokemon = 'Purugly'
        this.peso = 43.8
        this.altura = 1
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('sorpresa'), 1],
            [move.get('arañazo'), 5],
            [move.get('finta'), 17],
            [move.get('golpes furia'), 20],
            [move.get('cuchillada'), 37],
            [move.get('golpe bajo'), 45],
        ]
        this.stats = {
            hp: 71,
            attack: 82,
            defense: 64,
            spattack: 64,
            spdefense: 59,
            speed: 112,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}