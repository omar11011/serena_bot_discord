const Base = require('./Bounsweet').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 762
        this.pokemon = 'Steenee'
        this.peso = 8.2
        this.altura = 0.7
        this.evolucion = [
            new Entidades.Evolucion.Movimiento('Tsareena', move.get('pisotón')),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('gira rápido'), 9],
            [move.get('hoja afilada'), 13],
            [move.get('doble bofetón'), 18],
            [move.get('hoja mágica'), 21],
            [move.get('pisotón'), 29],
            [move.get('lluevehojas'), 45],
        ]
        this.stats = {
            hp: 52,
            attack: 50,
            defense: 48,
            spattack: 40,
            spdefense: 48,
            speed: 62,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}