const Base = require('./Flabebe').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 670
        this.pokemon = 'Floette'
        this.peso = 0.9
        this.altura = 0.2
        this.evolucion = [
            new Entidades.Evolucion.Item('Florges', item.get('piedra día')),
        ]
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('látigo cepa'), 1],
            [move.get('viento feérico'), 6],
            [move.get('hoja afilada'), 15],
            [move.get('hoja mágica'), 25],
            [move.get('tormenta floral'), 33],
            [move.get('fuerza lunar'), 46],
            [move.get('danza pétalo'), 51],
            [move.get('rayo solar'), 58],
        ]
        this.stats = {
            hp: 54,
            attack: 45,
            defense: 47,
            spattack: 75,
            spdefense: 98,
            speed: 52,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}