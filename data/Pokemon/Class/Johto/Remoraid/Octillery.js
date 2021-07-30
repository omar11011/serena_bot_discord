const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 224
        this.pokemon = 'Octillery'
        this.peso = 28.5
        this.altura = 0.9
        this.color = Entidades.Color.Rojo
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('lanzamugre'), 1],
            [move.get('pedrada'), 1],
            [move.get('pistola agua'), 1],
            [move.get('restricción'), 6],
            [move.get('psicorrayo'), 10],
            [move.get('rayo aurora'), 14],
            [move.get('rayo burbuja'), 18],
            [move.get('estrujón'), 28],
            [move.get('doble rayo'), 34],
            [move.get('rayo hielo'), 40],
            [move.get('recurrente'), 46],
            [move.get('hidrobomba'), 52],
            [move.get('hiperrayo'), 58],
        ]
        this.stats = {
            hp: 75,
            attack: 105,
            defense: 75,
            spattack: 105,
            spdefense: 75,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}