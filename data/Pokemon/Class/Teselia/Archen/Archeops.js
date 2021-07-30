const Base = require('./Archen').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 567
        this.pokemon = 'Archeops'
        this.peso = 32
        this.altura = 1.4
        this.evolucion = []
        this.movimientos = [
            [move.get('ataque rápido'), 1],
            [move.get('ataque ala'), 1],
            [move.get('lanzarrocas'), 5],
            [move.get('picoteo'), 15],
            [move.get('poder pasado'), 18],
            [move.get('acróbata'), 28],
            [move.get('dragoaliento'), 31],
            [move.get('triturar'), 35],
            [move.get('esfuerzo'), 40],
            [move.get('avalancha'), 51],
            [move.get('garra dragón'), 56],
            [move.get('golpe'), 61],
        ]
        this.stats = {
            hp: 75,
            attack: 140,
            defense: 65,
            spattack: 112,
            spdefense: 65,
            speed: 110,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}