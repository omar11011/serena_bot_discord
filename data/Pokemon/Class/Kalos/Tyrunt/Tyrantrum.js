const Base = require('./Tyrunt').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 697
        this.pokemon = 'Tyrantrum'
        this.peso = 270
        this.altura = 2.5
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Tyrantrum', item.get('tyrantrumita')),
        ]
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('pisotón'), 10],
            [move.get('mordisco'), 17],
            [move.get('poder pasado'), 26],
            [move.get('cola dragón'), 30],
            [move.get('triturar'), 34],
            [move.get('garra dragón'), 37],
            [move.get('golpe'), 42],
            [move.get('terremoto'), 47],
            [move.get('perforador'), 53],
            [move.get('testarazo'), 58],
            [move.get('avalancha'), 68],
            [move.get('giga impacto'), 68],
        ]
        this.stats = {
            hp: 82,
            attack: 121,
            defense: 119,
            spattack: 69,
            spdefense: 59,
            speed: 71,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}