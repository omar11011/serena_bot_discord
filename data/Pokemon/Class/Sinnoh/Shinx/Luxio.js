const Base = require('./Shinx').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 404
        this.pokemon = 'Luxio'
        this.peso = 30.5
        this.altura = 0.9
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Luxray', 30),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('chispa'), 13],
            [move.get('mordisco'), 18],
            [move.get('colmillo rayo'), 33],
            [move.get('triturar'), 38],
            [move.get('chispazo'), 48],
            [move.get('voltio cruel'), 53],
        ]
        this.stats = {
            hp: 60,
            attack: 85,
            defense: 49,
            spattack: 60,
            spdefense: 49,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}