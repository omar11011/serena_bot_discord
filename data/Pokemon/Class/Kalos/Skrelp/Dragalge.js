const Base = require('./Skrelp').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 691
        this.pokemon = 'Dragalge'
        this.tipo = [
            Entidades.Tipo.Veneno,
            Entidades.Tipo.Dragón,
        ]
        this.peso = 81.5
        this.altura = 1.8
        this.evolucion = []
        this.captura = 55
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('pistola agua'), 1],
            [move.get('finta'), 5],
            [move.get('burbuja'), 12],
            [move.get('ácido'), 15],
            [move.get('cola veneno'), 23],
            [move.get('hidropulso'), 25],
            [move.get('acua cola'), 35],
            [move.get('bomba lodo'), 38],
            [move.get('hidrobomba'), 42],
            [move.get('pulso dragón'), 53],
            [move.get('cola dragón'), 59],
            [move.get('ciclón'), 67],
        ]
        this.stats = {
            hp: 65,
            attack: 75,
            defense: 90,
            spattack: 97,
            spdefense: 123,
            speed: 44,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}