const Base = require('./NidoranM').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 33
        this.pokemon = 'Nidorino'
        this.peso = 19.5
        this.altura = 0.9
        this.evolucion = [
            new Entidades.Evolucion.Item('Nidoking', item.get('piedra lunar')),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('picotazo'), 1],
            [move.get('doble patada'), 9],
            [move.get('picotazo venenoso'), 13],
            [move.get('ataque furia'), 20],
            [move.get('cornada'), 23],
            [move.get('triturar'), 33],
            [move.get('puya nociva'), 43],
            [move.get('colmillo veneno'), 58],
            [move.get('perforador'), 61],
        ]
        this.stats = {
            hp: 61,
            attack: 72,
            defense: 57,
            spattack: 55,
            spdefense: 55,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}