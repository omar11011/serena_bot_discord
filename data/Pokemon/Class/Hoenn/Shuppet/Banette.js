const Base = require('./Shuppet').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 354
        this.pokemon = 'Banette'
        this.peso = 12.5
        this.altura = 1.1
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Banette', item.get('banettita')),
        ]
        this.captura = 45
        this.movimientos = [
            [move.get('desarme'), 1],
            [move.get('tinieblas'), 7],
            [move.get('sombra vil'), 13],
            [move.get('finta'), 19],
            [move.get('infortunio'), 22],
            [move.get('bola sombra'), 30],
            [move.get('golpe bajo'), 40],
            [move.get('golpe fantasma'), 64],
        ]
        this.stats = {
            hp: 64,
            attack: 115,
            defense: 65,
            spattack: 83,
            spdefense: 63,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}