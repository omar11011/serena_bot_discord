const Base = require('./Poochyena').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 262
        this.pokemon = 'Mightyena'
        this.peso = 37
        this.altura = 1
        this.evolucion = []
        this.captura = 127
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('colmillo hielo'), 1],
            [move.get('colmillo rayo'), 1],
            [move.get('colmillo ígneo'), 1],
            [move.get('mordisco'), 10],
            [move.get('buena baza'), 24],
            [move.get('triturar'), 40],
            [move.get('derribo'), 48],
            [move.get('golpe bajo'), 52],
            [move.get('carantoña'), 58],
        ]
        this.stats = {
            hp: 70,
            attack: 90,
            defense: 70,
            spattack: 60,
            spdefense: 60,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}