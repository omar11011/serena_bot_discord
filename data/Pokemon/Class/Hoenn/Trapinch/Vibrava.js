const Base = require('./Trapinch').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 329
        this.pokemon = 'Vibrava'
        this.tipo = [
            Entidades.Tipo.Tierra,
            Entidades.Tipo.Dragón,
        ]
        this.peso = 15.3
        this.altura = 1.1
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Flygon', 45),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('finta'), 1],
            [move.get('bofetón lodo'), 5],
            [move.get('terratemblor'), 8],
            [move.get('bucle arena'), 12],
            [move.get('avalancha'), 15],
            [move.get('tierra viva'), 26],
            [move.get('zumbido'), 29],
            [move.get('terremoto'), 33],
            [move.get('dragoaliento'), 35],
            [move.get('alboroto'), 40],
            [move.get('hiperrayo'), 43],
            [move.get('estruendo'), 47],
        ]
        this.stats = {
            hp: 50,
            attack: 70,
            defense: 50,
            spattack: 50,
            spdefense: 50,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}