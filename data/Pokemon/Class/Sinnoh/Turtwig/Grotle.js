const Base = require('./Turtwig').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 388
        this.pokemon = 'Grotle'
        this.peso = 97
        this.altura = 1.1
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Torterra', 32),
        ]
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('absorber'), 9],
            [move.get('hoja afilada'), 13],
            [move.get('mordisco'), 22],
            [move.get('megaagotar'), 27],
            [move.get('triturar'), 42],
            [move.get('gigadrenado'), 47],
            [move.get('lluevehojas'), 52],
        ]
        this.stats = {
            hp: 75,
            attack: 89,
            defense: 86,
            spattack: 55,
            spdefense: 65,
            speed: 36,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}