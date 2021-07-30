const Base = require('./Gothita').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 575
        this.pokemon = 'Gothorita'
        this.peso = 18
        this.altura = 0.7
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Gothitelle', 41),
        ]
        this.captura = 100
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('confusión'), 3],
            [move.get('doble bofetón'), 14],
            [move.get('psicorrayo'), 16],
            [move.get('finta'), 24],
            [move.get('psicocarga'), 25],
            [move.get('premonición'), 31],
            [move.get('psíquico'), 39],
        ]
        this.stats = {
            hp: 60,
            attack: 45,
            defense: 70,
            spattack: 75,
            spdefense: 85,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}