const Base = require('./Buizel').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 419
        this.pokemon = 'Floatzel'
        this.peso = 33.5
        this.altura = 1.1
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('bomba sónica'), 1],
            [move.get('colmillo hielo'), 1],
            [move.get('ataque rápido'), 11],
            [move.get('pistola agua'), 15],
            [move.get('persecución'), 18],
            [move.get('rapidez'), 21],
            [move.get('acua jet'), 24],
            [move.get('triturar'), 26],
            [move.get('doble golpe'), 29],
            [move.get('torbellino'), 35],
            [move.get('viento cortante'), 41],
            [move.get('acua cola'), 46],
            [move.get('hidrobomba'), 57],
        ]
        this.stats = {
            hp: 85,
            attack: 105,
            defense: 55,
            spattack: 85,
            spdefense: 50,
            speed: 115,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}