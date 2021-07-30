const Base = require('./Pidgey').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 17
        this.pokemon = 'Pidgeotto'
        this.peso = 30
        this.altura = 1.1
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Pidgeot', 36),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('tornado'), 9],
            [move.get('ataque rápido'), 13],
            [move.get('ciclón'), 22],
            [move.get('ataque ala'), 37],
            [move.get('tajo aéreo'), 57],
            [move.get('vendaval'), 62],
        ]
        this.stats = {
            hp: 63,
            attack: 60,
            defense: 55,
            spattack: 50,
            spdefense: 50,
            speed: 71,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}