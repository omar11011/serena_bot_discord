const Base = require('./Venonat').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 49
        this.pokemon = 'Venomoth'
        this.peso = 12.5
        this.altura = 1.5
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Venomoth', item.get('venomothita')),
        ]
        this.captura = 75
        this.movimientos = [
            [move.get('zumbido'), 1],
            [move.get('viento plata'), 11],
            [move.get('placaje'), 11],
            [move.get('confusión'), 11],
            [move.get('psicorrayo'), 17],
            [move.get('doble rayo'), 25],
            [move.get('tornado'), 31],
            [move.get('chupavidas'), 37],
            [move.get('cabezazo zen'), 41],
            [move.get('colmillo veneno'), 47],
            [move.get('psíquico'), 55],
        ]
        this.stats = {
            hp: 70,
            attack: 65,
            defense: 60,
            spattack: 90,
            spdefense: 75,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}