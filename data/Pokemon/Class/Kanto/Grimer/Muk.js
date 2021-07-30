const Base = require('./Grimer').class
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 89
        this.pokemon = 'Muk'
        this.altura = 1.2
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('bofetón lodo'), 7],
            [move.get('tóxico'), 10],
            [move.get('residuos'), 15],
            [move.get('bomba fango'), 18],
            [move.get('lanzamiento'), 26],
            [move.get('bomba lodo'), 29],
            [move.get('onda tóxica'), 32],
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