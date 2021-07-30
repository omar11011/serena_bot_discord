const Base = require('./Krabby').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 99
        this.pokemon = 'Kingler'
        this.peso = 60
        this.altura = 1.3
        this.evolucion = [
            new Entidades.Evolucion.Gigamax('Kingler Gigamax'),
        ]
        this.captura = 60
        this.movimientos = [
            [move.get('burbuja'), 1],
            [move.get('agarre'), 5],
            [move.get('rayo burbuja'), 15],
            [move.get('disparo lodo'), 19],
            [move.get('garra metal'), 21],
            [move.get('pisotón'), 25],
            [move.get('derribo'), 32],
            [move.get('guillotina'), 37],
            [move.get('atizar'), 44],
            [move.get('salmuera'), 51],
            [move.get('martillazo'), 56],
            [move.get('azote'), 63],
        ]
        this.stats = {
            hp: 55,
            attack: 130,
            defense: 115,
            spattack: 50,
            spdefense: 50,
            speed: 75,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}