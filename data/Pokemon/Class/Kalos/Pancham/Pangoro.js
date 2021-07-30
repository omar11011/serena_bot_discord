const Base = require('./Pancham').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 675
        this.pokemon = 'Pangoro'
        this.tipo = [
            Entidades.Tipo.Lucha,
            Entidades.Tipo.Siniestro,
        ]
        this.peso = 136
        this.altura = 2.1
        this.evolucion = []
        this.captura = 65
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('empujón'), 7],
            [move.get('golpe kárate'), 12],
            [move.get('puño cometa'), 15],
            [move.get('cuchillada'), 20],
            [move.get('llave giro'), 25],
            [move.get('tiro vital'), 27],
            [move.get('golpe cuerpo'), 35],
            [move.get('triturar'), 42],
            [move.get('gancho alto'), 52],
            [move.get('machada'), 57],
            [move.get('puntapié'), 70],
        ]
        this.stats = {
            hp: 95,
            attack: 124,
            defense: 78,
            spattack: 69,
            spdefense: 71,
            speed: 58,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}