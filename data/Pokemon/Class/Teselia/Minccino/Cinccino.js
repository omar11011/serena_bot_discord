const Base = require('./Minccino').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 573
        this.pokemon = 'Cinccino'
        this.peso = 7.5
        this.altura = 0.5
        this.evolucion = []
        this.captura = 60
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('doble bofetón'), 13],
            [move.get('rapidez'), 19],
            [move.get('plumerazo'), 25],
            [move.get('recurrente'), 25],
            [move.get('pedrada'), 25],
            [move.get('espabila'), 31],
            [move.get('eco voz'), 33],
            [move.get('atizar'), 37],
            [move.get('vozarrón'), 43],
            [move.get('última baza'), 45],
        ]
        this.stats = {
            hp: 75,
            attack: 95,
            defense: 60,
            spattack: 65,
            spdefense: 60,
            speed: 115,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}