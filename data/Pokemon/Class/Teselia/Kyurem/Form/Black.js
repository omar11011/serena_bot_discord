const Base = require('../Kyurem').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Kyurem Negro'
        this.altura = 3.3
        this.evolucion = []
        this.movimientos = [
            [move.get('colmillo rayo'), 1],
            [move.get('furia dragón'), 1],
            [move.get('poder pasado'), 15],
            [move.get('rayo hielo'), 22],
            [move.get('dragoaliento'), 29],
            [move.get('cuchillada'), 36],
            [move.get('rayo fusión'), 43],
            [move.get('rayo gélido'), 50],
            [move.get('pulso dragón'), 57],
            [move.get('esfuerzo'), 71],
            [move.get('ventisca'), 78],
            [move.get('enfado'), 85],
            [move.get('vozarrón'), 92],
        ]
        this.stats = {
            hp: 125,
            attack: 170,
            defense: 100,
            spattack: 120,
            spdefense: 90,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}