const Base = require('./Ducklett').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 581
        this.pokemon = 'Swanna'
        this.peso = 24.2
        this.altura = 1.3
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('pistola agua'), 1],
            [move.get('ataque ala'), 9],
            [move.get('hidropulso'), 13],
            [move.get('golpe aéreo'), 15],
            [move.get('rayo burbuja'), 19],
            [move.get('tajo aéreo'), 27],
            [move.get('pájaro osado'), 47],
            [move.get('vendaval'), 55],
        ]
        this.stats = {
            hp: 75,
            attack: 87,
            defense: 63,
            spattack: 87,
            spdefense: 63,
            speed: 98,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}