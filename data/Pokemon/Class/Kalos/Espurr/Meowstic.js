const Base = require('./Espurr').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 678
        this.pokemon = 'Meowstic'
        this.peso = 8.5
        this.altura = 0.6
        this.color = Entidades.Color.Blanco
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('antojo'), 5],
            [move.get('confusión'), 9],
            [move.get('psicorrayo'), 17],
            [move.get('sorpresa'), 19],
            [move.get('voz cautivadora'), 22],
            [move.get('psicocarga'), 25],
            [move.get('psíquico'), 40],
            [move.get('golpe bajo'), 48],
        ]
        this.stats = {
            hp: 74,
            attack: 48,
            defense: 76,
            spattack: 83,
            spdefense: 81,
            speed: 104,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}