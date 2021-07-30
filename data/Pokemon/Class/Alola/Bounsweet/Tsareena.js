const Base = require('./Steenee').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 763
        this.pokemon = 'Tsareena'
        this.peso = 21.4
        this.altura = 1.2
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('gira rápido'), 9],
            [move.get('hoja afilada'), 13],
            [move.get('doble bofetón'), 18],
            [move.get('hoja mágica'), 21],
            [move.get('pisotón'), 29],
            [move.get('patada tropical'), 30],
            [move.get('lluevehojas'), 45],
            [move.get('patada salto alta'), 49],
            [move.get('latigazo'), 53],
        ]
        this.stats = {
            hp: 72,
            attack: 120,
            defense: 98,
            spattack: 50,
            spdefense: 98,
            speed: 72,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}