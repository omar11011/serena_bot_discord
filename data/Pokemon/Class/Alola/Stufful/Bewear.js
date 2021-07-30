const Base = require('./Stufful').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 760
        this.pokemon = 'Bewear'
        this.peso = 135
        this.altura = 2.1
        this.evolucion = []
        this.captura = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('giro vil'), 14],
            [move.get('azote'), 19],
            [move.get('vendetta'), 24],
            [move.get('atadura'), 27],
            [move.get('derribo'), 30],
            [move.get('machada'), 36],
            [move.get('golpe'), 43],
            [move.get('doble filo'), 56],
            [move.get('fuerza bruta'), 62],
        ]
        this.stats = {
            hp: 120,
            attack: 125,
            defense: 80,
            spattack: 55,
            spdefense: 60,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}