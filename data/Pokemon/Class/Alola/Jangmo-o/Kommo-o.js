const Base = require('./Hakamo-o').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 784
        this.pokemon = 'Kommo-o'
        this.peso = 78.2
        this.altura = 1.6
        this.evolucion = []
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('cola dragón'), 17],
            [move.get('golpe cabeza'), 25],
            [move.get('gancho alto'), 35],
            [move.get('garra dragón'), 43],
            [move.get('fragor escamas'), 45],
            [move.get('enfado'), 67],
            [move.get('a bocajarro'), 75],
        ]
        this.stats = {
            hp: 75,
            attack: 110,
            defense: 125,
            spattack: 100,
            spdefense: 105,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}