const Base = require('./Ponyta').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 78
        this.pokemon = 'Rapidash'
        this.peso = 95
        this.altura = 1.7
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Rapidash', item.get('rapidashita')),
        ]
        this.captura = 60
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('puya nociva'), 1],
            [move.get('mega cuerno'), 1],
            [move.get('ascuas'), 9],
            [move.get('rueda fuego'), 13],
            [move.get('pisotón'), 17],
            [move.get('nitro carga'), 21],
            [move.get('giro fuego'), 25],
            [move.get('derribo'), 29],
            [move.get('infierno'), 33],
            [move.get('llamarada'), 41],
            [move.get('bote'), 45],
            [move.get('envite ígneo'), 49],
        ]
        this.stats = {
            hp: 65,
            attack: 100,
            defense: 70,
            spattack: 80,
            spdefense: 80,
            speed: 105,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}