const Base = require('./Sinistea').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 855
        this.pokemon = 'Polteageist'
        this.peso = 0.4
        this.altura = 0.2
        this.evolucion = []
        this.captura = 60
        this.movimientos = [
            [move.get('impresionar'), 1],
            [move.get('megaagotar'), 12],
            [move.get('alarido'), 12],
            [move.get('golpe bajo'), 24],
            [move.get('gigadrenado'), 36],
            [move.get('bola sombra'), 48],
        ]
        this.stats = {
            hp: 60,
            attack: 65,
            defense: 65,
            spattack: 134,
            spdefense: 114,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}