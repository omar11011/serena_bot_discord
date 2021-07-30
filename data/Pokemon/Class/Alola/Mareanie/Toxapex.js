const Base = require('./Mareanie').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 748
        this.pokemon = 'Toxapex'
        this.peso = 14.5
        this.altura = 0.7
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('picotazo venenoso'), 1],
            [move.get('picotazo'), 5],
            [move.get('mordisco'), 9],
            [move.get('carga tóxica'), 25],
            [move.get('clavo cañón'), 29],
            [move.get('puya nociva'), 37],
            [move.get('pin misil'), 51],
            [move.get('hidroariete'), 58],
        ]
        this.stats = {
            hp: 50,
            attack: 63,
            defense: 152,
            spattack: 53,
            spdefense: 142,
            speed: 35,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}