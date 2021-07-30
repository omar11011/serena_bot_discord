const Base = require('./Herdier').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 508
        this.pokemon = 'Stoutland'
        this.peso = 61
        this.altura = 1.2
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('colmillo hielo'), 1],
            [move.get('colmillo rayo'), 1],
            [move.get('colmillo ígneo'), 1],
            [move.get('mordisco'), 8],
            [move.get('derribo'), 15],
            [move.get('triturar'), 24],
            [move.get('represalia'), 36],
            [move.get('inversión'), 42],
            [move.get('última baza'), 51],
            [move.get('giga impacto'), 59],
            [move.get('carantoña'), 63],
        ]
        this.stats = {
            hp: 85,
            attack: 110,
            defense: 90,
            spattack: 45,
            spdefense: 90,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}