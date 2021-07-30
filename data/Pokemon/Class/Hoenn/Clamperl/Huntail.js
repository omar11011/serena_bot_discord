const Base = require('./Clamperl').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 367
        this.pokemon = 'Huntail'
        this.peso = 27
        this.altura = 1.7
        this.evolucion = []
        this.captura = 60
        this.movimientos = [
            [move.get('torbellino'), 1],
            [move.get('mordisco'), 1],
            [move.get('finta'), 11],
            [move.get('hidropulso'), 14],
            [move.get('colmillo hielo'), 16],
            [move.get('salmuera'), 19],
            [move.get('golpe bajo'), 23],
            [move.get('buceo'), 26],
            [move.get('triturar'), 34],
            [move.get('acua cola'), 39],
            [move.get('hidrobomba'), 50],
        ]
        this.stats = {
            hp: 55,
            attack: 104,
            defense: 105,
            spattack: 94,
            spdefense: 75,
            speed: 52,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}