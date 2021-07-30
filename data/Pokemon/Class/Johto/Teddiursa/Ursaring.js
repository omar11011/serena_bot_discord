const Base = require('./Teddiursa').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 217
        this.pokemon = 'Ursaring'
        this.peso = 125.8
        this.altura = 1.8
        this.evolucion = []
        this.captura = 60
        this.movimientos = [
            [move.get('antojo'), 1],
            [move.get('arañazo'), 1],
            [move.get('lengüetazo'), 1],
            [move.get('golpes furia'), 8],
            [move.get('finta'), 15],
            [move.get('cuchillada'), 29],
            [move.get('ronquido'), 49],
            [move.get('golpe'), 58],
            [move.get('machada'), 67],
        ]
        this.stats = {
            hp: 90,
            attack: 130,
            defense: 75,
            spattack: 75,
            spdefense: 75,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}