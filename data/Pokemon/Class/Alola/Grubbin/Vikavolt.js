const Base = require('./Charjabug').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 738
        this.pokemon = 'Vikavolt'
        this.peso = 45
        this.altura = 1.5
        this.color = Entidades.Color.Azul
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('agarre'), 1],
            [move.get('bofetón lodo'), 7],
            [move.get('mordisco'), 10],
            [move.get('picadura'), 13],
            [move.get('chispa'), 16],
            [move.get('acróbata'), 19],
            [move.get('guillotina'), 25],
            [move.get('zumbido'), 31],
            [move.get('excavar'), 37],
            [move.get('electrocañón'), 43],
            [move.get('tajo aéreo'), 50],
            [move.get('rayo'), 50],
        ]
        this.stats = {
            hp: 77,
            attack: 70,
            defense: 90,
            spattack: 145,
            spdefense: 75,
            speed: 43,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}