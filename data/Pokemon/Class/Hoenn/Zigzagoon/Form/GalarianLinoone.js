const Base = require('./GalarianZigzagoon').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 264
        this.pokemon = 'Linoone de Galar'
        this.peso = 32.5
        this.altura = 0.5
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Obstagoon', 35),
        ]
        this.captura = 90
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('carantoña'), 1],
            [move.get('golpe cabeza'), 11],
            [move.get('golpes furia'), 19],
            [move.get('antojo'), 24],
            [move.get('cuchillada'), 32],
            [move.get('doble filo'), 35],
            [move.get('lanzamiento'), 41],
        ]
        this.stats = {
            hp: 78,
            attack: 70,
            defense: 61,
            spattack: 50,
            spdefense: 61,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}