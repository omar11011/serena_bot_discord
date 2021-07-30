const Base = require('./Pidove').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 520
        this.pokemon = 'Tranquill'
        this.peso = 15
        this.altura = 0.6
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Unfezant', 32),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('tornado'), 1],
            [move.get('ataque rápido'), 11],
            [move.get('aire afilado'), 15],
            [move.get('tajo aéreo'), 32],
            [move.get('viento cortante'), 36],
            [move.get('imagen'), 50],
            [move.get('tajo aéreo'), 59],
        ]
        this.stats = {
            hp: 62,
            attack: 77,
            defense: 62,
            spattack: 50,
            spdefense: 42,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}