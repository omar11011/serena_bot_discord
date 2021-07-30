const Base = require('./Slakoth').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 288
        this.pokemon = 'Vigoroth'
        this.peso = 46.5
        this.altura = 1.4
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Slaking', 36),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('alboroto'), 9],
            [move.get('golpes furia'), 14],
            [move.get('cuchillada'), 23],
            [move.get('guardia baja'), 27],
            [move.get('contraataque'), 33],
            [move.get('puño certero'), 37],
            [move.get('inversión'), 43],
        ]
        this.stats = {
            hp: 80,
            attack: 80,
            defense: 80,
            spattack: 55,
            spdefense: 55,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}