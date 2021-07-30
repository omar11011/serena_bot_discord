const Base = require('./Roggenrola').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 525
        this.pokemon = 'Boldore'
        this.peso = 102
        this.altura = 0.9
        this.evolucion = [
            new Entidades.Evolucion.Intercambio('Gigalith'),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('golpe cabeza'), 10],
            [move.get('pedrada'), 14],
            [move.get('bofetón lodo'), 17],
            [move.get('antiaéreo'), 23],
            [move.get('joya de luz'), 25],
            [move.get('avalancha'), 30],
            [move.get('roca afilada'), 48],
        ]
        this.stats = {
            hp: 70,
            attack: 105,
            defense: 105,
            spattack: 50,
            spdefense: 40,
            speed: 20,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}