const Base = require('./Lileep').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 346
        this.pokemon = 'Cradily'
        this.peso = 60.4
        this.altura = 1.5
        this.color = Entidades.Color.Verde
        this.evolucion = []
        this.movimientos = [
            [move.get('impresionar'), 1],
            [move.get('restricción'), 1],
            [move.get('ácido'), 8],
            [move.get('poder pasado'), 36],
            [move.get('energibola'), 56],
            [move.get('escupir'), 66],
            [move.get('estrujón'), 76],
        ]
        this.stats = {
            hp: 86,
            attack: 81,
            defense: 97,
            spattack: 81,
            spdefense: 107,
            speed: 43,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}