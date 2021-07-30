const Base = require('./Ferroseed').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 598
        this.pokemon = 'Ferrothorn'
        this.peso = 110
        this.altura = 1
        this.evolucion = []
        this.captura = 90
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('desenrollar'), 6],
            [move.get('garra metal'), 14],
            [move.get('pin misil'), 18],
            [move.get('giro bola'), 31],
            [move.get('disparo espejo'), 40],
            [move.get('latigazo'), 40],
            [move.get('treparrocas'), 40],
            [move.get('cabeza de hierro'), 43],
            [move.get('vendetta'), 53],
            [move.get('foco resplandor'), 61],
        ]
        this.stats = {
            hp: 74,
            attack: 94,
            defense: 131,
            spattack: 54,
            spdefense: 116,
            speed: 20,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}