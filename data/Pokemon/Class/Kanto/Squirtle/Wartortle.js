const Base = require('./Squirtle').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 8
        this.pokemon = 'Wartortle'
        this.peso = 22.5
        this.altura = 1
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Blastoise', 36),
        ]
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('pistola agua'), 7],
            [move.get('burbuja'), 13],
            [move.get('mordisco'), 17],
            [move.get('giro rápido'), 21],
            [move.get('hidropulso'), 29],
            [move.get('acua cola'), 33],
            [move.get('cabezazo'), 37],
            [move.get('hidrobomba'), 49],
        ]
        this.stats = {
            hp: 59,
            attack: 63,
            defense: 80,
            spattack: 65,
            spdefense: 80,
            speed: 58,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}