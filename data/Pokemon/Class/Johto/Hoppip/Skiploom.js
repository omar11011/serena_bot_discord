const Base = require('./Hoppip').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 188
        this.pokemon = 'Skiploom'
        this.peso = 1
        this.altura = 0.6
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Jumpluff', 27)
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('viento feérico'), 10],
            [move.get('recurrente'), 20],
            [move.get('megaagotar'), 28],
            [move.get('acróbata'), 32],
            [move.get('gigadrenado'), 52],
            [move.get('bote'), 56],
        ]
        this.stats = {
            hp: 55,
            attack: 45,
            defense: 50,
            spattack: 45,
            spdefense: 65,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}