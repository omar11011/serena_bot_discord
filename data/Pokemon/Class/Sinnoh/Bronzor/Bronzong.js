const Base = require('./Bronzor').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 437
        this.pokemon = 'Bronzong'
        this.peso = 187
        this.altura = 1.3
        this.evolucion = []
        this.captura = 90
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('confusión'), 1],
            [move.get('psicoonda'), 15],
            [move.get('finta'), 21],
            [move.get('premonición'), 29],
            [move.get('giro bola'), 35],
            [move.get('paranormal'), 42],
            [move.get('vendetta'), 46],
            [move.get('cuerpo pesado'), 58],
        ]
        this.stats = {
            hp: 67,
            attack: 89,
            defense: 116,
            spattack: 79,
            spdefense: 116,
            speed: 33,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}