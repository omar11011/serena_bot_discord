const Base = require('./Servine').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 497
        this.pokemon = 'Serperior'
        this.peso = 63
        this.altura = 3.3
        this.evolucion = []
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('látigo cepa'), 7],
            [move.get('constricción'), 10],
            [move.get('ciclón de hojas'), 16],
            [move.get('megaagotar'), 24],
            [move.get('atizar'), 28],
            [move.get('hoja aguda'), 32],
            [move.get('gigadrenado'), 44],
            [move.get('estrujón'), 50],
            [move.get('lluevehojas'), 62],
        ]
        this.stats = {
            hp: 75,
            attack: 75,
            defense: 95,
            spattack: 75,
            spdefense: 95,
            speed: 113,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}