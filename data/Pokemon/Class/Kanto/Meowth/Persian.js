const Base = require('./Meowth').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 53
        this.pokemon = 'Persian'
        this.peso = 32
        this.altura = 1
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Persian', item.get('persianita')),
        ]
        this.captura = 90
        this.movimientos = [
            [move.get('carantoña'), 1],
            [move.get('arañazo'), 1],
            [move.get('mordisco'), 6],
            [move.get('sorpresa'), 9],
            [move.get('golpes furia'), 14],
            [move.get('finta'), 22],
            [move.get('rapidez'), 28],
            [move.get('joya de luz'), 32],
            [move.get('cuchillada'), 37],
            [move.get('buena baza'), 49],
            [move.get('tajo umbrío'), 61],
            [move.get('amago'), 65],
        ]
        this.stats = {
            hp: 65,
            attack: 70,
            defense: 60,
            spattack: 65,
            spdefense: 65,
            speed: 115,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}