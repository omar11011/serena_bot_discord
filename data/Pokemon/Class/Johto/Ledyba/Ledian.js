const Base = require('./Ledyba').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 166
        this.pokemon = 'Ledian'
        this.peso = 35.6
        this.altura = 1.4
        this.evolucion = []
        this.captura = 90
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('rapidez'), 8],
            [move.get('ultra puño'), 15],
            [move.get('viento plata'), 20],
            [move.get('puño cometa'), 24],
            [move.get('zumbido'), 38],
            [move.get('tajo aéreo'), 42],
            [move.get('doble filo'), 47],
        ]
        this.stats = {
            hp: 55,
            attack: 35,
            defense: 50,
            spattack: 55,
            spdefense: 110,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}