const Base = require('./Yungoos').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 735
        this.pokemon = 'Gumshoos'
        this.peso = 14.2
        this.altura = 0.7
        this.evolucion = []
        this.captura = 127
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('persecución'), 7],
            [move.get('mordisco'), 19],
            [move.get('bofetón lodo'), 23],
            [move.get('super diente'), 27],
            [move.get('derribo'), 31],
            [move.get('triturar'), 39],
            [move.get('hiper colmillo'), 43],
            [move.get('golpe'), 51],
        ]
        this.stats = {
            hp: 88,
            attack: 110,
            defense: 60,
            spattack: 55,
            spdefense: 60,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}