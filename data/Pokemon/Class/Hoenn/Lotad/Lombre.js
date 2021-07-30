const Base = require('./Lotad').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 271
        this.pokemon = 'Lombre'
        this.peso = 32.5
        this.altura = 1.2
        this.evolucion = [
            new Entidades.Evolucion.Item('Ludicolo', item.get('piedra agua')),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('impresionar'), 1],
            [move.get('absorber'), 6],
            [move.get('burbuja'), 9],
            [move.get('don natural'), 12],
            [move.get('sorpresa'), 16],
            [move.get('megaagotar'), 18],
            [move.get('rayo burbuja'), 24],
            [move.get('alboroto'), 32],
            [move.get('desarme'), 36],
            [move.get('cabezazo zen'), 49],
            [move.get('hidrobomba'), 44],
        ]
        this.stats = {
            hp: 60,
            attack: 50,
            defense: 50,
            spattack: 60,
            spdefense: 70,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}