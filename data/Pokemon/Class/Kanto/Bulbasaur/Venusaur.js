const Base = require('./Ivysaur').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 3
        this.pokemon = 'Venusaur'
        this.peso = 100
        this.altura = 2
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Venusaur', item.get('venusaurita')),
            new Entidades.Evolucion.Gigamax('Venusaur Gigamax'),
        ]
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('látigo cepa'), 1],
            [move.get('derribo'), 15],
            [move.get('hoja afilada'), 20],
            [move.get('doble filo'), 31],
            [move.get('danza pétalo'), 32],
            [move.get('tormenta floral'), 50],
            [move.get('rayo solar'), 53],
        ]
        this.stats = {
            hp: 80,
            attack: 82,
            defense: 83,
            spattack: 100,
            spdefense: 100,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}