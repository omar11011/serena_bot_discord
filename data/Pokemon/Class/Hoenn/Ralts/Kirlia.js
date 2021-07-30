const Base = require('./Ralts').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 281
        this.pokemon = 'Kirlia'
        this.peso = 20.2
        this.altura = 0.8
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Gardevoir', 30),
            new Entidades.Evolucion.Item('Gallade', item.get('piedra alba'), false),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('confusión'), 1],
            [move.get('voz cautivadora'), 11],
            [move.get('hoja mágica'), 17],
            [move.get('beso drenaje'), 23],
            [move.get('psíquico'), 30],
            [move.get('premonición'), 37],
            [move.get('come sueños'), 47],
            [move.get('poder reserva'), 51],
        ]
        this.stats = {
            hp: 38,
            attack: 35,
            defense: 35,
            spattack: 65,
            spdefense: 55,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}