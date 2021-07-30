const Base = require('./Vanillite').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 583
        this.pokemon = 'Vanillish'
        this.peso = 41
        this.altura = 1.1
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Vanilluxe', 47),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('carámbano'), 1],
            [move.get('impresionar'), 7],
            [move.get('alboroto'), 10],
            [move.get('viento hielo'), 13],
            [move.get('alud'), 19],
            [move.get('disparo espejo'), 26],
            [move.get('rayo hielo'), 36],
            [move.get('manto espejo'), 47],
            [move.get('ventisca'), 53],
            [move.get('frío polar'), 58],
        ]
        this.stats = {
            hp: 51,
            attack: 65,
            defense: 65,
            spattack: 80,
            spdefense: 75,
            speed: 59,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}