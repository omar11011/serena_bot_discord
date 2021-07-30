const Base = require('./Tentacool').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 73
        this.pokemon = 'Tentacruel'
        this.peso = 55
        this.altura = 1.6
        this.evolucion = []
        this.captura = 60
        this.movimientos = [
            [move.get('picotazo venenoso'), 1],
            [move.get('restricción'), 7],
            [move.get('ácido'), 10],
            [move.get('hidropulso'), 16],
            [move.get('constricción'), 19],
            [move.get('bomba ácida'), 22],
            [move.get('pistola agua'), 22],
            [move.get('rayo burbuja'), 25],
            [move.get('derribo'), 28],
            [move.get('puya nociva'), 32],
            [move.get('salmuera'), 36],
            [move.get('infortunio'), 44],
            [move.get('onda tóxica'), 48],
            [move.get('hidrobomba'), 52],
            [move.get('estrujón'), 56],
        ]
        this.stats = {
            hp: 80,
            attack: 70,
            defense: 65,
            spattack: 80,
            spdefense: 120,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}