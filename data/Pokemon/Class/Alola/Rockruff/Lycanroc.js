const Base = require('./Rockruff').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 746
        this.spawn = false
        this.pokemon = 'Lycanroc'
        this.peso = 25
        this.altura = 0.8
        this.evolucion = []
        this.captura = 90
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('roca veloz'), 1],
            [move.get('ataque rápido'), 1],
            [move.get('mordisco'), 7],
            [move.get('lanzarrocas'), 15],
            [move.get('tumba rocas'), 23],
            [move.get('avalancha'), 34],
            [move.get('triturar'), 40],
            [move.get('treparrocas'), 45],
            [move.get('roca afilada'), 48],
        ]
        this.stats = {
            hp: 75,
            attack: 115,
            defense: 65,
            spattack: 55,
            spdefense: 65,
            speed: 112,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}