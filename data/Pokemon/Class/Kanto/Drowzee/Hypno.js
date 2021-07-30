const Base = require('./Drowzee').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 97
        this.pokemon = 'Hypno'
        this.region = Entidades.Region.Kanto
        this.peso = 75.6
        this.altura = 1.6
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('confusión'), 9],
            [move.get('golpe cabeza'), 13],
            [move.get('golpes furia'), 17],
            [move.get('psicorrayo'), 25],
            [move.get('tóxico'), 32],
            [move.get('sincorruido'), 37],
            [move.get('cabezazo zen'), 41],
            [move.get('mega puño'), 46],
            [move.get('psíquico'), 49],
            [move.get('psicocarga'), 57],
            [move.get('premonición'), 61],
        ]
        this.stats = {
            hp: 85,
            attack: 73,
            defense: 70,
            spattack: 73,
            spdefense: 115,
            speed: 67,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}