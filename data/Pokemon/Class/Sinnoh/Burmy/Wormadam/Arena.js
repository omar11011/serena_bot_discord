const Base = require('../Form/Arena').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 413
        this.pokemon = 'Wormadam Tronco Arena'
        this.peso = 6.5
        this.altura = 0.5
        this.probMacho = 0
        this.probHembra = 1
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('golpe bajo'), 1],
            [move.get('picadura'), 15],
            [move.get('poder oculto'), 20],
            [move.get('confusión'), 23],
            [move.get('pedrada'), 26],
            [move.get('psicorrayo'), 32],
            [move.get('azote'), 38],
            [move.get('psíquico'), 44],
            [move.get('fisura'), 47],
            [move.get('zumbido'), 50],
        ]
        this.stats = {
            hp: 60,
            attack: 79,
            defense: 105,
            spattack: 59,
            spdefense: 85,
            speed: 36,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}