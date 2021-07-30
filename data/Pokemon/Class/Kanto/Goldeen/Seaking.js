const Base = require('./Goldeen').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 119
        this.pokemon = 'Seaking'
        this.peso = 39
        this.altura = 1.3
        this.evolucion = []
        this.captura = 60
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('puya nociva'), 1],
            [move.get('placaje'), 1],
            [move.get('cornada'), 8],
            [move.get('azote'), 13],
            [move.get('hidropulso'), 16],
            [move.get('tóxico'), 20],
            [move.get('ataque furia'), 24],
            [move.get('derribo'), 28],
            [move.get('cascada'), 32],
            [move.get('perforador'), 40],
            [move.get('mega cuerno'), 54],
            [move.get('hiperrayo'), 65],
        ]
        this.stats = {
            hp: 80,
            attack: 92,
            defense: 65,
            spattack: 65,
            spdefense: 80,
            speed: 68,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}