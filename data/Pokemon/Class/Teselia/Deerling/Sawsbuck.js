const Base = require('./Deerling').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 586
        this.pokemon = 'Sawsbuck'
        this.peso = 92
        this.altura = 1.9
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('doble patada'), 10],
            [move.get('finta'), 16],
            [move.get('derribo'), 20],
            [move.get('patada salto'), 24],
            [move.get('energibola'), 32],
            [move.get('mega cuerno'), 34],
            [move.get('asta drenaje'), 37],
            [move.get('doble filo'), 52],
            [move.get('rayo solar'), 60],
        ]
        this.stats = {
            hp: 80,
            attack: 100,
            defense: 70,
            spattack: 60,
            spdefense: 70,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}