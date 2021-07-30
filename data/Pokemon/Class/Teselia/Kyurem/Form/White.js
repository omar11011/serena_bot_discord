const Base = require('../Kyurem').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.pokemon = 'Kyurem Blanco'
        this.altura = 3.6
        this.evolucion = []
        this.movimientos = [
            [move.get('colmillo rayo'), 1],
            [move.get('furia dragón'), 1],
            [move.get('poder pasado'), 15],
            [move.get('rayo hielo'), 22],
            [move.get('dragoaliento'), 29],
            [move.get('cuchillada'), 36],
            [move.get('llama fusión'), 43],
            [move.get('llama gélida'), 50],
            [move.get('pulso dragón'), 57],
            [move.get('esfuerzo'), 71],
            [move.get('ventisca'), 78],
            [move.get('enfado'), 85],
            [move.get('vozarrón'), 92],
        ]
        this.stats = {
            hp: 125,
            attack: 120,
            defense: 90,
            spattack: 170,
            spdefense: 100,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}