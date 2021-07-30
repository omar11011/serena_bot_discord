const Base = require('./Totodile').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 159
        this.pokemon = 'Croconaw'
        this.peso = 25
        this.altura = 1.1
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Feraligatr', 30),
        ]
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('furia'), 1],
            [move.get('pistola agua'), 6],
            [move.get('mordisco'), 13],
            [move.get('colmillo hielo'), 21],
            [move.get('azote'), 24],
            [move.get('triturar'), 30],
            [move.get('guardia baja'), 33],
            [move.get('cuchillada'), 39],
            [move.get('golpe'), 48],
            [move.get('acua cola'), 51],
            [move.get('fuerza bruta'), 57],
            [move.get('hidrobomba'), 60],
        ]
        this.stats = {
            hp: 65,
            attack: 80,
            defense: 80,
            spattack: 59,
            spdefense: 63,
            speed: 58,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}