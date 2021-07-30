const Base = require('./Wartortle').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 9
        this.pokemon = 'Blastoise'
        this.peso = 85.5
        this.altura = 1.6
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Blastoise', item.get('blastoisita')),
            new Entidades.Evolucion.Gigamax('Blastoise Gigamax'),
        ]
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('foco resplandor'), 1],
            [move.get('pistola agua'), 7],
            [move.get('burbuja'), 13],
            [move.get('mordisco'), 17],
            [move.get('giro rápido'), 21],
            [move.get('hidropulso'), 29],
            [move.get('acua cola'), 33],
            [move.get('cabezazo'), 40],
            [move.get('hidrobomba'), 49],
        ]
        this.stats = {
            hp: 79,
            attack: 83,
            defense: 100,
            spattack: 85,
            spdefense: 105,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}