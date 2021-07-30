const Base = require('./Stunky').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 435
        this.pokemon = 'Skuntank'
        this.peso = 38
        this.altura = 1
        this.evolucion = []
        this.captura = 60
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('golpes furia'), 9],
            [move.get('amago'), 15],
            [move.get('bomba ácida'), 19],
            [move.get('mordisco'), 21],
            [move.get('cuchillada'), 25],
            [move.get('tajo umbrío'), 31],
            [move.get('lanzallamas'), 34],
            [move.get('golpe bajo'), 39],
            [move.get('eructo'), 43],
        ]
        this.stats = {
            hp: 103,
            attack: 93,
            defense: 67,
            spattack: 71,
            spdefense: 61,
            speed: 84,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}