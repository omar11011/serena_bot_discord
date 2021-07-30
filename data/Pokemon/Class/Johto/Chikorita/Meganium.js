const Base = require('./Bayleef').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 154
        this.pokemon = 'Meganium'
        this.peso = 100.5
        this.altura = 1.8
        this.evolucion = []
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('hoja afilada'), 6],
            [move.get('hoja mágica'), 22],
            [move.get('don natural'), 26],
            [move.get('danza pétalo'), 32],
            [move.get('golpe cuerpo'), 46],
            [move.get('rayo solar'), 66],
            [move.get('tormenta floral'), 70],
        ]
        this.stats = {
            hp: 80,
            attack: 82,
            defense: 100,
            spattack: 83,
            spdefense: 100,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}