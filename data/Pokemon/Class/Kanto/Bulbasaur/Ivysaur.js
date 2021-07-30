const Base = require('./Bulbasaur').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 2
        this.pokemon = 'Ivysaur'
        this.peso = 13
        this.altura = 1
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Venusaur', 32),
        ]
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('látigo cepa'), 9],
            [move.get('derribo'), 15],
            [move.get('hoja afilada'), 20],
            [move.get('doble filo'), 31],
            [move.get('rayo solar'), 44],
        ]
        this.stats = {
            hp: 60,
            attack: 62,
            defense: 63,
            spattack: 80,
            spdefense: 80,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}