const Base = require('./Kirlia').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 282
        this.pokemon = 'Gardevoir'
        this.peso = 48.4
        this.altura = 1.6
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Gardevoir', item.get('gardevoirita')),
        ]
        this.captura = 45
        this.movimientos = [
            [move.get('confusión'), 1],
            [move.get('voz cautivadora'), 11],
            [move.get('hoja mágica'), 17],
            [move.get('beso drenaje'), 23],
            [move.get('psíquico'), 30],
            [move.get('premonición'), 40],
            [move.get('come sueños'), 53],
            [move.get('poder reserva'), 58],
            [move.get('fuerza lunar'), 62],
        ]
        this.stats = {
            hp: 68,
            attack: 65,
            defense: 65,
            spattack: 125,
            spdefense: 115,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}