const Base = require('./Frillish').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 593
        this.pokemon = 'Jellicent'
        this.peso = 135
        this.altura = 2.2
        this.evolucion = []
        this.captura = 60
        this.movimientos = [
            [move.get('burbuja'), 1],
            [move.get('absorber'), 5],
            [move.get('tinieblas'), 9],
            [move.get('rayo burbuja'), 13],
            [move.get('hidropulso'), 22],
            [move.get('viento aciago'), 27],
            [move.get('salmuera'), 32],
            [move.get('infortunio'), 45],
            [move.get('hidrobomba'), 53],
            [move.get('estrujón'), 61],
            [move.get('salpicar'), 69],
        ]
        this.stats = {
            hp: 100,
            attack: 60,
            defense: 70,
            spattack: 85,
            spdefense: 105,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}