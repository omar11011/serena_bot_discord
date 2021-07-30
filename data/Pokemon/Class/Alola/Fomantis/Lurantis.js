const Base = require('./Fomantis').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 754
        this.pokemon = 'Lurantis'
        this.peso = 18.5
        this.altura = 0.9
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('corte furia'), 1],
            [move.get('follaje'), 5],
            [move.get('hoja afilada'), 10],
            [move.get('hoja aguda'), 23],
            [move.get('cuchillada'), 32],
            [move.get('tormenta floral'), 34],
            [move.get('tijera x'), 38],
            [move.get('rayo solar'), 47],
        ]
        this.stats = {
            hp: 70,
            attack: 105,
            defense: 90,
            spattack: 80,
            spdefense: 90,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}