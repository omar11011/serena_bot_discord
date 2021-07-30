const Base = require('./Oshawott').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 502
        this.pokemon = 'Dewott'
        this.peso = 24.5
        this.altura = 0.8
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Samurott', 36),
        ]
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('pistola agua'), 7],
            [move.get('concha filo'), 17],
            [move.get('corte furia'), 20],
            [move.get('hidropulso'), 25],
            [move.get('desquite'), 28],
            [move.get('acua jet'), 33],
            [move.get('acua cola'), 41],
            [move.get('represalia'), 44],
            [move.get('hidrobomba'), 52],
        ]
        this.stats = {
            hp: 75,
            attack: 75,
            defense: 60,
            spattack: 83,
            spdefense: 60,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}