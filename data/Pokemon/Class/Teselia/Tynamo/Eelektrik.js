const Base = require('./Tynamo').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 603
        this.pokemon = 'Eelektrik'
        this.peso = 22
        this.altura = 1.2
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Item('Eelektross', item.get('piedra trueno')),
        ]
        this.captura = 60
        this.movimientos = [
            [move.get('chispa'), 1],
            [move.get('rayo carga'), 1],
            [move.get('atadura'), 9],
            [move.get('ácido'), 19],
            [move.get('chispazo'), 29],
            [move.get('triturar'), 39],
            [move.get('rayo'), 44],
            [move.get('bomba ácida'), 49],
            [move.get('voltio cruel'), 59],
            [move.get('electrocañón'), 69],
            [move.get('golpe'), 74],
        ]
        this.stats = {
            hp: 65,
            attack: 85,
            defense: 70,
            spattack: 75,
            spdefense: 70,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}