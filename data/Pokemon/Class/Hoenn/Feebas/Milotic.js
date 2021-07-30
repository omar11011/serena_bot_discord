const Base = require('./Feebas').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 350
        this.pokemon = 'Milotic'
        this.peso = 162
        this.altura = 6.2
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Milotic', item.get('miloticita')),
        ]
        this.captura = 60
        this.movimientos = [
            [move.get('constricción'), 1],
            [move.get('pistola agua'), 1],
            [move.get('voz cautivadora'), 11],
            [move.get('ciclón'), 14],
            [move.get('cola dragón'), 24],
            [move.get('acua cola'), 31],
            [move.get('hidrobomba'), 44],
        ]
        this.stats = {
            hp: 95,
            attack: 60,
            defense: 79,
            spattack: 100,
            spdefense: 125,
            speed: 81,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}