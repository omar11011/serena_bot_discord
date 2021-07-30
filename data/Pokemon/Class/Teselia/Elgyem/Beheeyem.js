const Base = require('./Elgyem').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 606
        this.pokemon = 'Beheeyem'
        this.peso = 34.5
        this.altura = 1
        this.color = Entidades.Color.Marrón
        this.evolucion = []
        this.captura = 90
        this.movimientos = [
            [move.get('confusión'), 1],
            [move.get('psicorrayo'), 15],
            [move.get('golpe cabeza'), 18],
            [move.get('poder oculto'), 22],
            [move.get('cabezazo zen'), 32],
            [move.get('psíquico'), 39],
            [move.get('sincorruido'), 63],
        ]
        this.stats = {
            hp: 75,
            attack: 75,
            defense: 75,
            spattack: 125,
            spdefense: 95,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}