const Base = require('./Whirlipede').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 545
        this.pokemon = 'Scolipede'
        this.peso = 200.5
        this.altura = 2.5
        this.color = Entidades.Color.Rojo
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('desenrollar'), 1],
            [move.get('picotazo venenoso'), 5],
            [move.get('persecución'), 12],
            [move.get('cola veneno'), 19],
            [move.get('picadura'), 23],
            [move.get('carga tóxica'), 28],
            [move.get('rodillo de púas'), 37],
            [move.get('treparrocas'), 50],
            [move.get('doble filo'), 55],
            [move.get('mega cuerno'), 65],
        ]
        this.stats = {
            hp: 60,
            attack: 100,
            defense: 89,
            spattack: 55,
            spdefense: 69,
            speed: 112,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}