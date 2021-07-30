const Base = require('./Croconaw').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 160
        this.pokemon = 'Feraligatr'
        this.peso = 88.8
        this.altura = 2.3
        this.evolucion = []
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('furia'), 1],
            [move.get('pistola agua'), 6],
            [move.get('mordisco'), 13],
            [move.get('colmillo hielo'), 21],
            [move.get('azote'), 24],
            [move.get('triturar'), 32],
            [move.get('guardia baja'), 37],
            [move.get('cuchillada'), 45],
            [move.get('golpe'), 58],
            [move.get('acua cola'), 63],
            [move.get('fuerza bruta'), 71],
            [move.get('hidrobomba'), 76],
        ]
        this.stats = {
            hp: 85,
            attack: 105,
            defense: 100,
            spattack: 79,
            spdefense: 83,
            speed: 78,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}