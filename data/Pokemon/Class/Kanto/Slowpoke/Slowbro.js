const Base = require('./Slowpoke').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 80
        this.pokemon = 'Slowbro'
        this.peso = 78.5
        this.altura = 1.6
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Slowbro', item.get('slowbrodita')),
        ]
        this.captura = 75
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('pistola agua'), 9],
            [move.get('confusión'), 14],
            [move.get('golpe cabeza'), 23],
            [move.get('hidropulso'), 28],
            [move.get('cabezazo zen'), 32],
            [move.get('psíquico'), 49],
        ]
        this.stats = {
            hp: 95,
            attack: 75,
            defense: 110,
            spattack: 100,
            spdefense: 80,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}