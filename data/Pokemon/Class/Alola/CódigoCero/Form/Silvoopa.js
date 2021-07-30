const Base = require('../Silvally').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.redeem = true
        this.pokemon = 'Silvoopa'
        this.tipo = [
            Entidades.Tipo.Normal,
            Entidades.Tipo.Psíquico,
            Entidades.Tipo.Fantasma,
        ]
        this.evolucion = []
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('colmillo ígneo'), 1],
            [move.get('colmillo hielo'), 1],
            [move.get('colmillo rayo'), 1],
            [move.get('impresionar'), 5],
            [move.get('persecución'), 10],
            [move.get('mordisco'), 15],
            [move.get('golpe aéreo'), 20],
            [move.get('garra brutal'), 25],
            [move.get('tijera x'), 30],
            [move.get('bola sombra'), 40],
            [move.get('triturar'), 50],
            [move.get('doble golpe'), 55],
            [move.get('tajo aéreo'), 60],
            [move.get('castigo'), 65],
            [move.get('paso dimensional'), 80],
        ]
        this.stats = {
            hp: 115,
            attack: 115,
            defense: 95,
            spattack: 115,
            spdefense: 95,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}