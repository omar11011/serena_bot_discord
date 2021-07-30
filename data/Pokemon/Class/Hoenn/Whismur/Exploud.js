const Base = require('./Loudred').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 295
        this.pokemon = 'Exploud'
        this.peso = 84
        this.altura = 1.5
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('colmillo rayo'), 1],
            [move.get('colmillo hielo'), 1],
            [move.get('colmillo ígneo'), 1],
            [move.get('eco voz'), 4],
            [move.get('impresionar'), 9],
            [move.get('mordisco'), 20],
            [move.get('pisotón'), 23],
            [move.get('alboroto'), 27],
            [move.get('triturar'), 40],
            [move.get('vozarrón'), 47],
            [move.get('sincorruido'), 53],
            [move.get('estruendo'), 58],
            [move.get('hiperrayo'), 64],
        ]
        this.stats = {
            hp: 104,
            attack: 91,
            defense: 63,
            spattack: 91,
            spdefense: 73,
            speed: 68,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}