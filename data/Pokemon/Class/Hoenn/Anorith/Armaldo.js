const Base = require('./Anorith').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 348
        this.pokemon = 'Armaldo'
        this.peso = 68.2
        this.altura = 1.5
        this.evolucion = []
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('pistola agua'), 13],
            [move.get('garra metal'), 19],
            [move.get('poder pasado'), 31],
            [move.get('cuchillada'), 46],
            [move.get('pedrada'), 55],
            [move.get('garra brutal'), 67],
            [move.get('tijera x'), 73],
        ]
        this.stats = {
            hp: 75,
            attack: 125,
            defense: 100,
            spattack: 70,
            spdefense: 80,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}