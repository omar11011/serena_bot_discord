const Base = require('./Skwovet').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 820
        this.pokemon = 'Greedent'
        this.peso = 6
        this.altura = 0.6
        this.evolucion = []
        this.captura = 90
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('antojo'), 1],
            [move.get('mordisco'), 5],
            [move.get('escupir'), 15],
            [move.get('golpe cuerpo'), 20],
            [move.get('contraataque'), 34],
            [move.get('semilladora'), 41],
            [move.get('super diente'), 48],
            [move.get('eructo'), 55],
        ]
        this.stats = {
            hp: 120,
            attack: 95,
            defense: 95,
            spattack: 55,
            spdefense: 75,
            speed: 20,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}