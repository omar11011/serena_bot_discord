const Base = require('./Magnemite').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 82
        this.pokemon = 'Magneton'
        this.peso = 60
        this.altura = 1
        this.evolucion = [
            new Entidades.Evolucion.Item('Magnezone', item.get('piedra trueno')),
        ]
        this.captura = 60
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('impactrueno'), 5],
            [move.get('bomba sónica'), 17],
            [move.get('chispa'), 19],
            [move.get('disparo espejo'), 23],
            [move.get('bola voltio'), 29],
            [move.get('foco resplandor'), 33],
            [move.get('bomba imán'), 34],
            [move.get('rapidez'), 35],
            [move.get('chispazo'), 43],
            [move.get('giro bola'), 59],
            [move.get('electrocañón'), 63],
        ]
        this.stats = {
            hp: 50,
            attack: 60,
            defense: 95,
            spattack: 120,
            spdefense: 70,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}