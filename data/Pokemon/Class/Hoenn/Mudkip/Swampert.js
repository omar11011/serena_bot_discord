const Base = require('./Marshtomp').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 260
        this.pokemon = 'Swampert'
        this.peso = 81.9
        this.altura = 1.5
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Swampert', item.get('swampertita')),
        ]
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('disparo lodo'), 1],
            [move.get('pistola agua'), 4],
            [move.get('bofetón lodo'), 9],
            [move.get('bomba fango'), 22],
            [move.get('avalancha'), 28],
            [move.get('agua lodosa'), 39],
            [move.get('derribo'), 44],
            [move.get('terremoto'), 51],
            [move.get('esfuerzo'), 56],
            [move.get('machada'), 63],
        ]
        this.stats = {
            hp: 100,
            attack: 110,
            defense: 90,
            spattack: 85,
            spdefense: 90,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}