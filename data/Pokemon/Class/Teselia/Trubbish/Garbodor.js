const Base = require('./Trubbish').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 569
        this.pokemon = 'Garbodor'
        this.peso = 107.3
        this.altura = 1.9
        this.evolucion = [
            new Entidades.Evolucion.Gigamax('Garbodor Gigamax'),
        ]
        this.captura = 60
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('bomba ácida'), 12],
            [move.get('doble bofetón'), 14],
            [move.get('residuos'), 18],
            [move.get('derribo'), 25],
            [move.get('bomba lodo'), 29],
            [move.get('niebla clara'), 34],
            [move.get('eructo'), 49],
            [move.get('lanza mugre'), 54],
        ]
        this.stats = {
            hp: 80,
            attack: 95,
            defense: 82,
            spattack: 60,
            spdefense: 82,
            speed: 75,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}