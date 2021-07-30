const Base = require('./Venipede').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 544
        this.pokemon = 'Whirlipede'
        this.peso = 58.5
        this.altura = 1.2
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Scolipede', 30),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('desenrollar'), 1],
            [move.get('picotazo venenoso'), 5],
            [move.get('persecución'), 12],
            [move.get('cola veneno'), 19],
            [move.get('picadura'), 23],
            [move.get('carga tóxica'), 28],
            [move.get('rodillo de púas'), 37],
            [move.get('treparrocas'), 46],
            [move.get('doble filo'), 50],
        ]
        this.stats = {
            hp: 40,
            attack: 55,
            defense: 99,
            spattack: 40,
            spdefense: 79,
            speed: 47,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}