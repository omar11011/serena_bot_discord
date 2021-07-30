const Base = require('./AlolanGrimer').class
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 89
        this.pokemon = 'Muk de Alola'
        this.peso = 52
        this.altura = 1
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('mordisco'), 7],
            [move.get('bomba ácida'), 15],
            [move.get('colmillo veneno'), 18],
            [move.get('lanzamiento'), 26],
            [move.get('desarme'), 29],
            [move.get('triturar'), 32],
            [move.get('lanza mugre'), 41],
            [move.get('eructo'), 52],
        ]
        this.stats = {
            hp: 105,
            attack: 105,
            defense: 75,
            spattack: 65,
            spdefense: 100,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}