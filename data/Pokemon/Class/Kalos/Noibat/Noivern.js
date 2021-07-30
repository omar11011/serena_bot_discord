const Base = require('./Noibat').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 715
        this.pokemon = 'Noivern'
        this.peso = 85
        this.altura = 1.5
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Noivern', item.get('noivernita')),
            new Entidades.Evolucion.Gigamax('Noivern Gigamax'),
        ]
        this.captura = 45
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('chupavidas'), 5],
            [move.get('absorber'), 5],
            [move.get('tornado'), 11],
            [move.get('mordisco'), 13],
            [move.get('ataque ala'), 16],
            [move.get('aire afilado'), 23],
            [move.get('viento cortante'), 31],
            [move.get('super diente'), 43],
            [move.get('garra umbría'), 50],
            [move.get('tajo aéreo'), 53],
            [move.get('vendaval'), 62],
            [move.get('pulso dragón'), 70],
            [move.get('estruendo'), 75],
        ]
        this.stats = {
            hp: 85,
            attack: 70,
            defense: 80,
            spattack: 97,
            spdefense: 80,
            speed: 123,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}