const Base = require('./Omanyte').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 139
        this.pokemon = 'Omastar'
        this.peso = 35
        this.altura = 1
        this.evolucion = []
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('mordisco'), 7],
            [move.get('pistola agua'), 10],
            [move.get('desenrollar'), 16],
            [move.get('furia'), 20],
            [move.get('disparo lodo'), 25],
            [move.get('salmuera'), 28],
            [move.get('cornada'), 34],
            [move.get('poder pasado'), 37],
            [move.get('clavo cañón'), 46],
            [move.get('pedrada'), 56],
            [move.get('rayo hielo'), 60],
            [move.get('hidrobomba'), 75],
        ]
        this.stats = {
            hp: 70,
            attack: 60,
            defense: 125,
            spattack: 115,
            spdefense: 70,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}