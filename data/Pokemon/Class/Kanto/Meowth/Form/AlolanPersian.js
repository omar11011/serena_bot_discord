const Base = require('./AlolanMeowth').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 53
        this.pokemon = 'Persian de Alola'
        this.peso = 33
        this.altura = 1.1
        this.evolucion = []
        this.movimientos = [
            [move.get('rapidez'), 1],
            [move.get('arañazo'), 1],
            [move.get('carantoña'), 1],
            [move.get('mordisco'), 6],
            [move.get('sorpresa'), 9],
            [move.get('golpes furia'), 14],
            [move.get('finta'), 22],
            [move.get('joya de luz'), 32],
            [move.get('cuchillada'), 37],
            [move.get('buena baza'), 49],
            [move.get('tajo umbrío'), 61],
            [move.get('amago'), 65],
            [move.get('pulso umbrío'), 69],
        ]
        this.stats = {
            hp: 65,
            attack: 60,
            defense: 60,
            spattack: 75,
            spdefense: 65,
            speed: 115,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}