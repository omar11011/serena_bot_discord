const Base = require('./Vanillite').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 584
        this.pokemon = 'Vanilluxe'
        this.peso = 57.5
        this.altura = 1.3
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('carámbano'), 1],
            [move.get('meteorobola'), 1],
            [move.get('liofilización'), 1],
            [move.get('impresionar'), 7],
            [move.get('alboroto'), 10],
            [move.get('viento hielo'), 13],
            [move.get('alud'), 19],
            [move.get('disparo espejo'), 26],
            [move.get('rayo hielo'), 36],
            [move.get('manto espejo'), 50],
            [move.get('ventisca'), 59],
            [move.get('frío polar'), 67],
        ]
        this.stats = {
            hp: 71,
            attack: 95,
            defense: 85,
            spattack: 110,
            spdefense: 95,
            speed: 79,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}