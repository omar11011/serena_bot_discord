const Base = require('./Vigoroth').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 289
        this.pokemon = 'Slaking'
        this.peso = 130.5
        this.altura = 2
        this.color = Entidades.Color.Marrón
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('alboroto'), 9],
            [move.get('antojo'), 23],
            [move.get('guardia baja'), 27],
            [move.get('contraataque'), 33],
            [move.get('azote'), 39],
            [move.get('lanzamiento'), 47],
            [move.get('castigo'), 53],
            [move.get('machada'), 61],
        ]
        this.stats = {
            hp: 150,
            attack: 160,
            defense: 100,
            spattack: 95,
            spdefense: 65,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}