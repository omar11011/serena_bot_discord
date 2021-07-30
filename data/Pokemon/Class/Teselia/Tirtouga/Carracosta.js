const Base = require('./Tirtouga').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 565
        this.pokemon = 'Carracosta'
        this.peso = 81
        this.altura = 1.2
        this.evolucion = []
        this.movimientos = [
            [move.get('pistola agua'), 1],
            [move.get('desenrollar'), 5],
            [move.get('mordisco'), 8],
            [move.get('acua jet'), 15],
            [move.get('poder pasado'), 18],
            [move.get('triturar'), 21],
            [move.get('salmuera'), 28],
            [move.get('antiaéreo'), 31],
            [move.get('acua cola'), 45],
            [move.get('avalancha'), 51],
            [move.get('hidrobomba'), 61],
        ]
        this.stats = {
            hp: 74,
            attack: 108,
            defense: 133,
            spattack: 83,
            spdefense: 65,
            speed: 32,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}