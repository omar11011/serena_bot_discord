const Base = require('./Baltoy').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 344
        this.pokemon = 'Claydol'
        this.peso = 108
        this.altura = 1.5
        this.color = Entidades.Color.Negro
        this.evolucion = []
        this.captura = 90
        this.movimientos = [
            [move.get('confusión'), 1],
            [move.get('giro rápido'), 4],
            [move.get('bofetón lodo'), 7],
            [move.get('tumba rocas'), 10],
            [move.get('psicorrayo'), 13],
            [move.get('poder pasado'), 21],
            [move.get('paranormal'), 28],
            [move.get('hiperrayo'), 36],
            [move.get('tierra viva'), 40],
        ]
        this.stats = {
            hp: 60,
            attack: 70,
            defense: 105,
            spattack: 70,
            spdefense: 120,
            speed: 75,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}