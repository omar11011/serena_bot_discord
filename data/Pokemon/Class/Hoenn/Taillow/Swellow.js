const Base = require('./Taillow').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 277
        this.pokemon = 'Swellow'
        this.peso = 19.8
        this.altura = 0.7
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('picoteo'), 1],
            [move.get('ataque rápido'), 9],
            [move.get('ataque ala'), 13],
            [move.get('golpe aéreo'), 21],
            [move.get('tajo aéreo'), 39],
            [move.get('esfuerzo'), 45],
            [move.get('pájaro osado'), 51],
            [move.get('inversión'), 57],
        ]
        this.stats = {
            hp: 60,
            attack: 85,
            defense: 60,
            spattack: 75,
            spdefense: 50,
            speed: 125,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}