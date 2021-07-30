const Base = require('./Shieldon').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 411
        this.pokemon = 'Bastiodon'
        this.peso = 149.5
        this.altura = 1.3
        this.evolucion = []
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('derribo'), 15],
            [move.get('poder pasado'), 28],
            [move.get('cabeza de hierro'), 51],
            [move.get('cuerpo pesado'), 58],
        ]
        this.stats = {
            hp: 60,
            attack: 52,
            defense: 168,
            spattack: 47,
            spdefense: 138,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}