const Base = require('./Pignite').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 500
        this.pokemon = 'Emboar'
        this.peso = 150
        this.altura = 1.6
        this.evolucion = []
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('ascuas'), 7],
            [move.get('nitrocarga'), 15],
            [move.get('empujón'), 17],
            [move.get('polución'), 20],
            [move.get('desenrollar'), 23],
            [move.get('derribo'), 28],
            [move.get('golpe calor'), 31],
            [move.get('buena baza'), 38],
            [move.get('lanzallamas'), 43],
            [move.get('testarazo'), 50],
            [move.get('envite ígneo'), 62],
            [move.get('machada'), 64],
        ]
        this.stats = {
            hp: 110,
            attack: 123,
            defense: 65,
            spattack: 100,
            spdefense: 65,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}