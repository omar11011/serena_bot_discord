const Base = require('./Natu').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 178
        this.pokemon = 'Xatu'
        this.peso = 15
        this.altura = 1.5
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('tinieblas'), 6],
            [move.get('poder reserva'), 17],
            [move.get('viento aciago'), 20],
            [move.get('tajo aéreo'), 25],
            [move.get('psíquico'), 35],
            [move.get('premonición'), 49],
        ]
        this.stats = {
            hp: 60,
            attack: 75,
            defense: 70,
            spattack: 95,
            spdefense: 70,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}