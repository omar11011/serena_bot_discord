const Base = require('./Vibrava').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 330
        this.pokemon = 'Flygon'
        this.peso = 82
        this.altura = 2
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Flygon', item.get('flygonita')),
        ]
        this.captura = 45
        this.movimientos = [
            [move.get('finta'), 1],
            [move.get('bofetón lodo'), 5],
            [move.get('terratemblor'), 8],
            [move.get('bucle arena'), 12],
            [move.get('avalancha'), 15],
            [move.get('tierra viva'), 26],
            [move.get('cola dragón'), 29],
            [move.get('terremoto'), 33],
            [move.get('dragoaliento'), 35],
            [move.get('alboroto'), 40],
            [move.get('hiperrayo'), 43],
            [move.get('garra dragón'), 45],
            [move.get('carga dragón'), 47],
        ]
        this.stats = {
            hp: 80,
            attack: 100,
            defense: 80,
            spattack: 80,
            spdefense: 80,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}