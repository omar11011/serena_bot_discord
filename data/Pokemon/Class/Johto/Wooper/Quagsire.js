const Base = require('./Wooper').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 195
        this.pokemon = 'Quagsire'
        this.peso = 75
        this.altura = 1.4
        this.evolucion = []
        this.captura = 90
        this.movimientos = [
            [move.get('pistola agua'), 1],
            [move.get('disparo lodo'), 9],
            [move.get('atizar'), 15],
            [move.get('bomba fango'), 19],
            [move.get('terremoto'), 36],
            [move.get('golpe cabeza'), 40],
            [move.get('agua lodosa'), 53],
        ]
        this.stats = {
            hp: 95,
            attack: 85,
            defense: 85,
            spattack: 65,
            spdefense: 65,
            speed: 35,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}