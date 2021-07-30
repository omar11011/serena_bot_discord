const Base = require('./Salandit').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 758
        this.pokemon = 'Salazzle'
        this.peso = 22.2
        this.altura = 1.2
        this.probMacho = 0
        this.probHembra = 1
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('ascuas'), 5],
            [move.get('furia dragón'), 13],
            [move.get('polución'), 16],
            [move.get('doble bofetón'), 21],
            [move.get('pirotecnia'), 24],
            [move.get('carga tóxica'), 39],
            [move.get('lanzallamas'), 44],
            [move.get('pulso dragón'), 56],
        ]
        this.stats = {
            hp: 68,
            attack: 64,
            defense: 60,
            spattack: 111,
            spdefense: 60,
            speed: 117,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}