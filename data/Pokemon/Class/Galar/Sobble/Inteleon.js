const Base = require('./Drizzile').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 818
        this.pokemon = 'Inteleon'
        this.peso = 45.2
        this.altura = 1.9
        this.evolucion = [
            new Entidades.Evolucion.Gigamax('Inteleon Gigamax'),
        ]
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('pistola agua'), 6],
            [move.get('atadura'), 8],
            [move.get('hidropulso'), 12],
            [move.get('golpe bajo'), 24],
            [move.get('acróbata'), 35],
            [move.get('disparo certero'), 35],
            [move.get('hidroariete'), 38],
            [move.get('hidrobomba'), 62],
        ]
        this.stats = {
            hp: 70,
            attack: 85,
            defense: 65,
            spattack: 125,
            spdefense: 65,
            speed: 120,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}