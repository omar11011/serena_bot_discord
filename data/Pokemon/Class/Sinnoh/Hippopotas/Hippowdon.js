const Base = require('./Hippopotas').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 450
        this.pokemon = 'Hippowdon'
        this.peso = 300
        this.altura = 2
        this.evolucion = []
        this.captura = 60
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('colmillo ígneo'), 1],
            [move.get('colmillo rayo'), 1],
            [move.get('colmillo hielo'), 1],
            [move.get('mordisco'), 7],
            [move.get('derribo'), 19],
            [move.get('excavar'), 19],
            [move.get('bucle arena'), 25],
            [move.get('triturar'), 31],
            [move.get('terremoto'), 40],
            [move.get('doble filo'), 50],
            [move.get('fisura'), 60],
        ]
        this.stats = {
            hp: 108,
            attack: 112,
            defense: 118,
            spattack: 68,
            spdefense: 72,
            speed: 47,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}