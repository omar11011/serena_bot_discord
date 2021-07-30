const Base = require('./Snubbull').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 210
        this.pokemon = 'Granbull'
        this.peso = 48.7
        this.altura = 1.4
        this.color = Entidades.Color.Morado
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('colmillo rayo'), 1],
            [move.get('colmillo hielo'), 1],
            [move.get('colmillo ígneo'), 1],
            [move.get('mordisco'), 7],
            [move.get('lengüetazo'), 13],
            [move.get('golpe cabeza'), 19],
            [move.get('furia'), 35],
            [move.get('derribo'), 43],
            [move.get('carantoña'), 43],
            [move.get('vendetta'), 51],
            [move.get('triturar'), 59],
            [move.get('enfado'), 67],
        ]
        this.stats = {
            hp: 90,
            attack: 120,
            defense: 75,
            spattack: 60,
            spdefense: 60,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}