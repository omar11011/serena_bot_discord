const Base = require('./Sentret').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 162
        this.pokemon = 'Furret'
        this.peso = 32.5
        this.altura = 1.8
        this.evolucion = []
        this.captura = 90
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('arañazo'), 1],
            [move.get('ataque rápido'), 7],
            [move.get('golpes furia'), 13],
            [move.get('atizar'), 28],
            [move.get('golpe bajo'), 36],
            [move.get('vozarrón'), 56],
        ]
        this.stats = {
            hp: 85,
            attack: 76,
            defense: 64,
            spattack: 45,
            spdefense: 55,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}