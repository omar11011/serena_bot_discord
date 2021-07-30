const Base = require('./Litwick').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 608
        this.pokemon = 'Lampent'
        this.peso = 13
        this.altura = 0.6
        this.color = Entidades.Color.Negro
        this.evolucion = [
            new Entidades.Evolucion.Item('Chandelure', item.get('piedra noche')),
        ]
        this.captura = 90
        this.movimientos = [
            [move.get('ascuas'), 1],
            [move.get('impresionar'), 1],
            [move.get('polución'), 5],
            [move.get('giro fuego'), 7],
            [move.get('tinieblas'), 13],
            [move.get('pirotecnia'), 20],
            [move.get('infortunio'), 28],
            [move.get('infierno'), 38],
            [move.get('bola sombra'), 53],
            [move.get('sofoco'), 69],
        ]
        this.stats = {
            hp: 60,
            attack: 40,
            defense: 60,
            spattack: 95,
            spdefense: 60,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}