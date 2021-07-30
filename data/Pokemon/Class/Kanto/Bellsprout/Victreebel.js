const Base = require('./Weepinbell').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 71
        this.pokemon = 'Victreebel'
        this.peso = 15.5
        this.altura = 1.7
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('látigo cepa'), 1],
            [move.get('constricción'), 11],
            [move.get('ácido'), 24],
            [move.get('ciclón de hojas'), 27],
            [move.get('desarme'), 29],
            [move.get('hoja afilada'), 44],
            [move.get('hoja aguda'), 44],
            [move.get('puya nociva'), 47],
            [move.get('atizar'), 54],
            [move.get('estrujón'), 58],
        ]
        this.stats = {
            hp: 80,
            attack: 105,
            defense: 65,
            spattack: 100,
            spdefense: 70,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}