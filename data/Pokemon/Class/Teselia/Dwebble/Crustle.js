const Base = require('./Dwebble').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 558
        this.pokemon = 'Crustle'
        this.peso = 200
        this.altura = 1.4
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('corte furia'), 1],
            [move.get('pedrada'), 5],
            [move.get('finta'), 13],
            [move.get('antiaéreo'), 17],
            [move.get('picadura'), 23],
            [move.get('avalancha'), 29],
            [move.get('cuchillada'), 31],
            [move.get('tijera x'), 38],
            [move.get('azote'), 50],
            [move.get('romperrocas'), 55],
        ]
        this.stats = {
            hp: 70,
            attack: 105,
            defense: 125,
            spattack: 65,
            spdefense: 75,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}