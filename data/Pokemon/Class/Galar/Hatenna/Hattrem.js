const Base = require('./Hatenna').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 857
        this.pokemon = 'Hattrem'
        this.peso = 4.8
        this.altura = 0.6
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Hatterene', 42),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('confusión'), 1],
            [move.get('voz cautivadora'), 10],
            [move.get('buena baza'), 16],
            [move.get('psicorrayo'), 20],
            [move.get('brillo mágico'), 30],
            [move.get('giro vil'), 32],
            [move.get('psíquico'), 40],
        ]
        this.stats = {
            hp: 57,
            attack: 40,
            defense: 65,
            spattack: 86,
            spdefense: 73,
            speed: 49,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}