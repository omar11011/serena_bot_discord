const Base = require('./Dewpider').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 752
        this.pokemon = 'Araquanid'
        this.peso = 82
        this.altura = 1.8
        this.evolucion = []
        this.captura = 100
        this.movimientos = [
            [move.get('burbuja'), 1],
            [move.get('acoso'), 5],
            [move.get('picadura'), 13],
            [move.get('rayo burbuja'), 16],
            [move.get('mordisco'), 21],
            [move.get('chupavidas'), 33],
            [move.get('triturar'), 38],
            [move.get('plancha'), 45],
            [move.get('manto espejo'), 50],
            [move.get('hidroariete'), 57],
        ]
        this.stats = {
            hp: 68,
            attack: 70,
            defense: 92,
            spattack: 50,
            spdefense: 132,
            speed: 42,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}