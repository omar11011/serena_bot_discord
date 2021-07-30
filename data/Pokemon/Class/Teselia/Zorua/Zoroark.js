const Base = require('./Zorua').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 571
        this.pokemon = 'Zoroark'
        this.peso = 81.1
        this.altura = 1.6
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('persecución'), 5],
            [move.get('golpes furia'), 13],
            [move.get('finta'), 17],
            [move.get('vendetta'), 20],
            [move.get('juego sucio'), 29],
            [move.get('tajo umbrío'), 30],
            [move.get('castigo'), 49],
            [move.get('pulso noche'), 64],
        ]
        this.stats = {
            hp: 60,
            attack: 105,
            defense: 60,
            spattack: 120,
            spdefense: 60,
            speed: 105,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}