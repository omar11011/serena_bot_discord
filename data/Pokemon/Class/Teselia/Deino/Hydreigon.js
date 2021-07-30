const Base = require('./Zweilous').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 635
        this.pokemon = 'Hydreigon'
        this.peso = 160
        this.altura = 1.8
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Hydreigon', item.get('hydreigonita')),
            new Entidades.Evolucion.Gigamax('Hydreigon Gigamax'),
        ]
        this.captura = 45
        this.movimientos = [
            [move.get('triataque'), 1],
            [move.get('furia dragón'), 1],
            [move.get('mordisco'), 9],
            [move.get('golpe cabeza'), 12],
            [move.get('dragoaliento'), 17],
            [move.get('triturar'), 25],
            [move.get('atizar'), 28],
            [move.get('pulso dragón'), 32],
            [move.get('carga dragón'), 42],
            [move.get('golpe cuerpo'), 48],
            [move.get('vozarrón'), 68],
            [move.get('enfado'), 79],
        ]
        this.stats = {
            hp: 92,
            attack: 105,
            defense: 90,
            spattack: 125,
            spdefense: 90,
            speed: 98,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}