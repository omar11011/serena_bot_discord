const Base = require('./Monferno').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 392
        this.pokemon = 'Infernape'
        this.peso = 22
        this.altura = 0.9
        this.evolucion = []
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('ascuas'), 7],
            [move.get('ultra puño'), 14],
            [move.get('golpes furia'), 15],
            [move.get('rueda fuego'), 17],
            [move.get('amago'), 26],
            [move.get('castigo'), 29],
            [move.get('a bocajarro'), 36],
            [move.get('giro fuego'), 42],
            [move.get('acróbata'), 52],
            [move.get('envite ígneo'), 68],
        ]
        this.stats = {
            hp: 76,
            attack: 104,
            defense: 71,
            spattack: 104,
            spdefense: 71,
            speed: 108,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}