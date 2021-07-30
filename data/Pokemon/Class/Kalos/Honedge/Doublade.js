const Base = require('./Honedge').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 680
        this.pokemon = 'Doublade'
        this.peso = 4.5
        this.altura = 0.8
        this.evolucion = [
            new Entidades.Evolucion.Item('Aegislash', item.get('piedra noche')),
        ]
        this.captura = 90
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('corte furia'), 5],
            [move.get('persecución'), 13],
            [move.get('sombra vil'), 20],
            [move.get('golpe aéreo'), 22],
            [move.get('represalia'), 26],
            [move.get('cuchillada'), 29],
            [move.get('tajo umbrío'), 36],
            [move.get('cabeza de hierro'), 45],
            [move.get('espada santa'), 51],
        ]
        this.stats = {
            hp: 59,
            attack: 110,
            defense: 150,
            spattack: 45,
            spdefense: 49,
            speed: 35,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}