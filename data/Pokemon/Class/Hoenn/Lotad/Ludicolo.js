const Base = require('./Lombre').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 272
        this.pokemon = 'Ludicolo'
        this.peso = 55
        this.altura = 1.5
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('impresionar'), 1],
            [move.get('absorber'), 6],
            [move.get('burbuja'), 9],
            [move.get('golpes furia'), 12],
            [move.get('sorpresa'), 16],
            [move.get('megaagotar'), 18],
            [move.get('rayo burbuja'), 24],
            [move.get('alboroto'), 32],
            [move.get('desarme'), 36],
            [move.get('cabezazo zen'), 49],
            [move.get('hidrobomba'), 44],
        ]
        this.stats = {
            hp: 80,
            attack: 70,
            defense: 70,
            spattack: 90,
            spdefense: 100,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}