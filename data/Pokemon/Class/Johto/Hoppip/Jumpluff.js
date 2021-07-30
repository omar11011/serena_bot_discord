const Base = require('./Skiploom').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 189
        this.pokemon = 'Jumpluff'
        this.peso = 3
        this.altura = 0.8
        this.color = Entidades.Color.Azul
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('viento feérico'), 10],
            [move.get('recurrente'), 20],
            [move.get('megaagotar'), 29],
            [move.get('acróbata'), 34],
            [move.get('gigadrenado'), 59],
            [move.get('bote'), 64],
        ]
        this.stats = {
            hp: 75,
            attack: 55,
            defense: 70,
            spattack: 55,
            spdefense: 95,
            speed: 110,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}