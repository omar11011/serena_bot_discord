const Base = require('./Deino').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 634
        this.pokemon = 'Zweilous'
        this.peso = 50
        this.altura = 1.4
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Hydreigon', 64),
        ]
        this.captura = 45
        this.movimientos = [
            [move.get('doble golpe'), 1],
            [move.get('furia dragón'), 1],
            [move.get('mordisco'), 9],
            [move.get('golpe cabeza'), 12],
            [move.get('dragoaliento'), 17],
            [move.get('triturar'), 25],
            [move.get('atizar'), 28],
            [move.get('pulso dragón'), 32],
            [move.get('carga dragón'), 42],
            [move.get('golpe cuerpo'), 48],
            [move.get('vozarrón'), 64],
            [move.get('enfado'), 71],
        ]
        this.stats = {
            hp: 72,
            attack: 85,
            defense: 70,
            spattack: 65,
            spdefense: 70,
            speed: 58,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}