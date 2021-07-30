const Base = require('./Gabite').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 445
        this.pokemon = 'Garchomp'
        this.peso = 95
        this.altura = 1.9
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Garchomp', item.get('garchompita')),
            new Entidades.Evolucion.Gigamax('Garchomp Gigamax'),
        ]
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('colmillo ígneo'), 1],
            [move.get('furia dragón'), 7],
            [move.get('derribo'), 15],
            [move.get('bucle arena'), 19],
            [move.get('golpe bis'), 24],
            [move.get('cuchillada'), 28],
            [move.get('garra dragón'), 33],
            [move.get('excavar'), 40],
            [move.get('triturar'), 48],
            [move.get('carga dragón'), 55],
        ]
        this.stats = {
            hp: 108,
            attack: 130,
            defense: 95,
            spattack: 80,
            spdefense: 85,
            speed: 102,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}