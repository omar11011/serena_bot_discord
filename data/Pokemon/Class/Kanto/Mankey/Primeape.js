const Base = require('./Mankey').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 57
        this.pokemon = 'Primeape'
        this.peso = 32
        this.altura = 1
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('lanzamiento'), 1],
            [move.get('arañazo'), 1],
            [move.get('patada baja'), 1],
            [move.get('golpes furia'), 5],
            [move.get('golpe kárate'), 8],
            [move.get('persecución'), 12],
            [move.get('tajo cruzado'), 22],
            [move.get('buena baza'), 26],
            [move.get('castigo'), 30],
            [move.get('golpe'), 35],
            [move.get('a bocajarro'), 39],
            [move.get('pataleta'), 48],
            [move.get('enfado'), 53],
        ]
        this.stats = {
            hp: 65,
            attack: 105,
            defense: 60,
            spattack: 60,
            spdefense: 70,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}