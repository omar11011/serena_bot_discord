const Base = require('./Budew').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 407
        this.pokemon = 'Roserade'
        this.peso = 14.5
        this.altura = 0.9
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('meteorobola'), 1],
            [move.get('megaagotar'), 1],
            [move.get('hoja mágica'), 1],
            [move.get('picotazo venenoso'), 1],
        ]
        this.stats = {
            hp: 60,
            attack: 70,
            defense: 65,
            spattack: 125,
            spdefense: 105,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}