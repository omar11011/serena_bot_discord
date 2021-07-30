const Base = require('./Bergmite').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 713
        this.pokemon = 'Avalugg'
        this.peso = 505
        this.altura = 2
        this.evolucion = []
        this.captura = 55
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('mordisco'), 1],
            [move.get('nieve polvo'), 5],
            [move.get('viento hielo'), 10],
            [move.get('derribo'), 15],
            [move.get('colmillo hielo'), 26],
            [move.get('bola hielo'), 30],
            [move.get('giro rápido'), 35],
            [move.get('alud'), 42],
            [move.get('ventisca'), 46],
            [move.get('doble filo'), 56],
            [move.get('cabezazo'), 60],
            [move.get('triturar'), 65],
        ]
        this.stats = {
            hp: 95,
            attack: 117,
            defense: 184,
            spattack: 44,
            spdefense: 46,
            speed: 28,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}