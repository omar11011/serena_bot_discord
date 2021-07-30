const Base = require('./Applin').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 842
        this.pokemon = 'Appletun'
        this.peso = 13
        this.altura = 0.4
        this.evolucion = [
            new Entidades.Evolucion.Gigamax('Appletun Gigamax'),
        ]
        this.captura = 45
        this.movimientos = [
            [move.get('impresionar'), 1],
            [move.get('golpe cabeza'), 1],
            [move.get('ciclón'), 1],
            [move.get('bomba ácida'), 4],
            [move.get('pisotón'), 8],
            [move.get('semilladora'), 20],
            [move.get('ácido málico'), 28],
            [move.get('golpe cuerpo'), 32],
            [move.get('pulso dragón'), 40],
            [move.get('energibola'), 44],
        ]
        this.stats = {
            hp: 110,
            attack: 85,
            defense: 80,
            spattack: 110,
            spdefense: 80,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}