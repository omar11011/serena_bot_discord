const Base = require('./Wimpod').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 768
        this.pokemon = 'Golisopod'
        this.peso = 108
        this.altura = 2
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('estoicismo'), 1],
            [move.get('corte furia'), 4],
            [move.get('golpe roca'), 7],
            [move.get('picadura'), 10],
            [move.get('cuchillada'), 21],
            [move.get('concha filo'), 26],
            [move.get('escaramuza'), 30],
            [move.get('golpe bajo'), 31],
            [move.get('pin misil'), 41],
            [move.get('hidroariete'), 48],
        ]
        this.stats = {
            hp: 75,
            attack: 125,
            defense: 140,
            spattack: 60,
            spdefense: 90,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}