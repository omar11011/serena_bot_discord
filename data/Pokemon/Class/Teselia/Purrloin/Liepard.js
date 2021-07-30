const Base = require('./Purrloin').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 510
        this.pokemon = 'Liepard'
        this.peso = 37.5
        this.altura = 1.1
        this.evolucion = []
        this.captura = 90
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('golpes furia'), 12],
            [move.get('persecución'), 15],
            [move.get('sorpresa'), 22],
            [move.get('buena baza'), 31],
            [move.get('cuchillada'), 34],
            [move.get('tajo umbrío'), 43],
            [move.get('golpe bajo'), 55],
            [move.get('carantoña'), 58],
        ]
        this.stats = {
            hp: 64,
            attack: 88,
            defense: 50,
            spattack: 88,
            spdefense: 50,
            speed: 106,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}