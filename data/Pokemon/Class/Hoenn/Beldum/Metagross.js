const Base = require('./Metang').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 376
        this.pokemon = 'Metagross'
        this.peso = 550
        this.altura = 1.6
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Metagross', item.get('metagrossita')),
        ]
        this.movimientos = [
            [move.get('derribo'), 1],
            [move.get('confusión'), 20],
            [move.get('garra metal'), 20],
            [move.get('persecución'), 23],
            [move.get('puño bala'), 26],
            [move.get('cabezazo zen'), 32],
            [move.get('psíquico'), 38],
            [move.get('puño meteoro'), 44],
            [move.get('machada'), 45],
            [move.get('hiperrayo'), 60],
        ]
        this.stats = {
            hp: 80,
            attack: 135,
            defense: 130,
            spattack: 95,
            spdefense: 90,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}