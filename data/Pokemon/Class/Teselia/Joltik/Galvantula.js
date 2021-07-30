const Base = require('./Joltik').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 596
        this.pokemon = 'Galvantula'
        this.peso = 14.3
        this.altura = 0.8
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('chupavidas'), 1],
            [move.get('corte furia'), 12],
            [move.get('electrotela'), 15],
            [move.get('picadura'), 18],
            [move.get('cuchillada'), 26],
            [move.get('bola voltio'), 29],
            [move.get('doble rayo'), 34],
            [move.get('golpe bajo'), 46],
            [move.get('chispazo'), 60],
            [move.get('zumbido'), 64],
        ]
        this.stats = {
            hp: 70,
            attack: 77,
            defense: 60,
            spattack: 97,
            spdefense: 60,
            speed: 108,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}