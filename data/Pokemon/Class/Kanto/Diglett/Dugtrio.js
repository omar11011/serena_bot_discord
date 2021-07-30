const Base = require('./Diglett').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 51
        this.pokemon = 'Dugtrio'
        this.peso = 33.3
        this.altura = 0.8
        this.evolucion = []
        this.captura = 50
        this.movimientos = [
            [move.get('tajo umbrío'), 1],
            [move.get('triataque'), 1],
            [move.get('arañazo'), 1],
            [move.get('impresionar'), 7],
            [move.get('bofetón lodo'), 10],
            [move.get('magnitud'), 14],
            [move.get('terratemblor'), 18],
            [move.get('golpe bajo'), 22],
            [move.get('bomba fango'), 25],
            [move.get('bucle arena'), 26],
            [move.get('tierra viva'), 30],
            [move.get('excavar'), 35],
            [move.get('cuchillada'), 41],
            [move.get('terremoto'), 47],
            [move.get('fisura'), 53],
        ]
        this.stats = {
            hp: 35,
            attack: 100,
            defense: 50,
            spattack: 50,
            spdefense: 70,
            speed: 120,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}