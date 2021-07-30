const Base = require('./Buneary').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 428
        this.pokemon = 'Lopunny'
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.peso = 33.3
        this.altura = 1.2
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Lopunny', item.get('lopunnita')),
        ]
        this.captura = 60
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('manto espejo'), 1],
            [move.get('frustración'), 1],
            [move.get('ataque rápido'), 16],
            [move.get('patada salto'), 23],
            [move.get('puño mareo'), 36],
            [move.get('bote'), 56],
            [move.get('patada salto alta'), 66],
        ]
        this.stats = {
            hp: 65,
            attack: 76,
            defense: 84,
            spattack: 54,
            spdefense: 96,
            speed: 105,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}