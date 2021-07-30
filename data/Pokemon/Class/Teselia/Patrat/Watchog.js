const Base = require('./Patrat').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 505
        this.pokemon = 'Watchog'
        this.peso = 27
        this.altura = 1.1
        this.evolucion = []
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('patada baja'), 1],
            [move.get('mordisco'), 6],
            [move.get('triturar'), 16],
            [move.get('super diente'), 22],
            [move.get('hiper colmillo'), 32],
            [move.get('atizar'), 43],
        ]
        this.stats = {
            hp: 60,
            attack: 85,
            defense: 69,
            spattack: 60,
            spdefense: 69,
            speed: 77,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}