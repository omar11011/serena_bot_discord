const Base = require('./Machop').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 67
        this.pokemon = 'Machoke'
        this.peso = 70.5
        this.altura = 1.5
        this.evolucion = [
            new Entidades.Evolucion.Intercambio('Machamp'),
        ]
        this.captura = 90
        this.movimientos = [
            [move.get('patada baja'), 1],
            [move.get('golpe kárate'), 7],
            [move.get('puntapié'), 13],
            [move.get('desquite'), 19],
            [move.get('desarme'), 21],
            [move.get('tiro vital'), 25],
            [move.get('espabila'), 27],
            [move.get('golpe bis'), 33],
            [move.get('sumisión'), 37],
            [move.get('tajo cruzado'), 47],
            [move.get('puño dinámico'), 57],
        ]
        this.stats = {
            hp: 80,
            attack: 100,
            defense: 70,
            spattack: 50,
            spdefense: 60,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}