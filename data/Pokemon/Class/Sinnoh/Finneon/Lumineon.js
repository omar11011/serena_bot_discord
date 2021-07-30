const Base = require('./Finneon').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 457
        this.pokemon = 'Lumineon'
        this.peso = 24
        this.altura = 1.2
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('pistola agua'), 6],
            [move.get('tornado'), 17],
            [move.get('hidropulso'), 22],
            [move.get('torbellino'), 42],
            [move.get('bote'), 53],
            [move.get('viento plata'), 59],
        ]
        this.stats = {
            hp: 69,
            attack: 69,
            defense: 76,
            spattack: 69,
            spdefense: 81,
            speed: 91,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}