const Base = require('./Machoke').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 68
        this.pokemon = 'Machamp'
        this.peso = 130
        this.altura = 1.6
        this.evolucion = [
            new Entidades.Evolucion.Gigamax('Machamp Gigamax'),
        ]
        this.captura = 45
        this.movimientos = [
            [move.get('patada baja'), 1],
            [move.get('golpe kárate'), 7],
            [move.get('puntapié'), 13],
            [move.get('golpe cuerpo'), 15],
            [move.get('desquite'), 19],
            [move.get('desarme'), 21],
            [move.get('tiro vital'), 25],
            [move.get('espabila'), 27],
            [move.get('mega patada'), 30],
            [move.get('golpe bis'), 33],
            [move.get('sumisión'), 37],
            [move.get('tajo cruzado'), 47],
            [move.get('puño dinámico'), 57],
        ]
        this.stats = {
            hp: 90,
            attack: 130,
            defense: 80,
            spattack: 65,
            spdefense: 85,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}