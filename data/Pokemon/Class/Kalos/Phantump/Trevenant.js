const Base = require('./Phantump').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 709
        this.pokemon = 'Trevenant'
        this.peso = 71
        this.altura = 1.5
        this.evolucion = []
        this.captura = 60
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('impresionar'), 5],
            [move.get('finta'), 19],
            [move.get('golpe fantasma'), 45],
            [move.get('mazazo'), 49],
            [move.get('asta drenaje'), 54],
            [move.get('garra umbría'), 55],
        ]
        this.stats = {
            hp: 85,
            attack: 110,
            defense: 76,
            spattack: 65,
            spdefense: 82,
            speed: 56,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}