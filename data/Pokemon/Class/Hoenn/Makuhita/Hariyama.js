const Base = require('./Makuhita').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 297
        this.pokemon = 'Hariyama'
        this.peso = 253.8
        this.altura = 2.3
        this.color = Entidades.Color.Marrón
        this.evolucion = []
        this.captura = 200
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('empujón'), 7],
            [move.get('sorpresa'), 10],
            [move.get('palmeo'), 13],
            [move.get('desarme'), 19],
            [move.get('tiro vital'), 22],
            [move.get('estímulo'), 30],
            [move.get('espabila'), 38],
            [move.get('a bocajarro'), 46],
            [move.get('inversión'), 50],
            [move.get('cuerpo pesado'), 54],
        ]
        this.stats = {
            hp: 144,
            attack: 120,
            defense: 60,
            spattack: 40,
            spdefense: 60,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}