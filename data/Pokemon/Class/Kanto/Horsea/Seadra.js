const Base = require('./Horsea').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 117
        this.pokemon = 'Seadra'
        this.peso = 25
        this.altura = 1.2
        this.evolucion = [
            new Entidades.Evolucion.Intercambio('Kingdra', item.get('escama dragón'))
        ]
        this.captura = 75
        this.movimientos = [
            [move.get('burbuja'), 1],
            [move.get('placaje'), 1],
            [move.get('doble filo'), 9],
            [move.get('pistola agua'), 13],
            [move.get('ciclón'), 17],
            [move.get('rayo burbuja'), 21],
            [move.get('salmuera'), 31],
            [move.get('viento hielo'), 31],
            [move.get('rayo hielo'), 36],
            [move.get('pulso dragón'), 45],
            [move.get('ventisca'), 52],
            [move.get('hidrobomba'), 60],
        ]
        this.stats = {
            hp: 55,
            attack: 65,
            defense: 95,
            spattack: 95,
            spdefense: 45,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}