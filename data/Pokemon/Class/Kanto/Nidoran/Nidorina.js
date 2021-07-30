const Base = require('./NidoranF').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 30
        this.pokemon = 'Nidorina'
        this.peso = 20
        this.altura = 0.8
        this.evolucion = [
            new Entidades.Evolucion.Item('Nidoqueen', item.get('piedra lunar')),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('arañazo'), 1],
            [move.get('doble patada'), 9],
            [move.get('picotazo venenoso'), 13],
            [move.get('golpes furia'), 20],
            [move.get('mordisco'), 23],
            [move.get('triturar'), 43],
            [move.get('colmillo veneno'), 58],
        ]
        this.stats = {
            hp: 72,
            attack: 62,
            defense: 67,
            spattack: 55,
            spdefense: 55,
            speed: 56,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}