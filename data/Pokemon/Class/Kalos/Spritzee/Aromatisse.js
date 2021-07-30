const Base = require('./Spritzee').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 683
        this.pokemon = 'Aromatisse'
        this.peso = 15
        this.altura = 0.8
        this.evolucion = []
        this.captura = 140
        this.movimientos = [
            [move.get('viento feérico'), 1],
            [move.get('eco voz'), 13],
            [move.get('beso drenaje'), 21],
            [move.get('fuerza lunar'), 31],
            [move.get('azote'), 38],
            [move.get('psíquico'), 48],
            [move.get('voz cautivadora'), 53],
        ]
        this.stats = {
            hp: 101,
            attack: 72,
            defense: 72,
            spattack: 99,
            spdefense: 89,
            speed: 29,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}