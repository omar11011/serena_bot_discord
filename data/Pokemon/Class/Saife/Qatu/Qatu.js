const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 907
        this.pokemon = 'Qatu'
        this.region = Entidades.Region.Saife
        this.peso = 12
        this.altura = 0.9
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Xatu de Saife', 25),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('tinieblas'), 6],
            [move.get('poder reserva'), 17],
            [move.get('viento aciago'), 19],
            [move.get('tajo aéreo'), 22],
            [move.get('psíquico'), 30],
            [move.get('premonición'), 45],
        ]
        this.stats = {
            hp: 50,
            attack: 60,
            defense: 55,
            spattack: 75,
            spdefense: 50,
            speed: 75,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}