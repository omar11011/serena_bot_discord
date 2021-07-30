const Base = require('./Sandshrew').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 28
        this.pokemon = 'Sandslash'
        this.peso = 29.5
        this.altura = 1
        this.evolucion = []
        this.captura = 90
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('picotazo venenoso'), 5],
            [move.get('giro rápido'), 9],
            [move.get('corte furia'), 11],
            [move.get('magnitud'), 14],
            [move.get('rapidez'), 17],
            [move.get('golpes furia'), 20],
            [move.get('desenrollar'), 21],
            [move.get('garra brutal'), 22],
            [move.get('bucle arena'), 24],
            [move.get('cuchillada'), 28],
            [move.get('excavar'), 33],
            [move.get('giro bola'), 38],
            [move.get('terremoto'), 53],
        ]
        this.stats = {
            hp: 75,
            attack: 100,
            defense: 110,
            spattack: 45,
            spdefense: 55,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}