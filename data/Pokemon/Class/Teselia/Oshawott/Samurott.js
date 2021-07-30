const Base = require('./Dewott').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 503
        this.pokemon = 'Samurott'
        this.peso = 94.6
        this.altura = 1.5
        this.evolucion = []
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('mega cuerno'), 1],
            [move.get('pistola agua'), 7],
            [move.get('concha filo'), 17],
            [move.get('corte furia'), 20],
            [move.get('hidropulso'), 25],
            [move.get('desquite'), 28],
            [move.get('acua jet'), 36],
            [move.get('acua cola'), 43],
            [move.get('represalia'), 51],
            [move.get('hidrobomba'), 63],
        ]
        this.stats = {
            hp: 95,
            attack: 100,
            defense: 85,
            spattack: 108,
            spdefense: 70,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}