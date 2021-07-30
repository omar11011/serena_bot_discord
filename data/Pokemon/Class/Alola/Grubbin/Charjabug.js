const Base = require('./Grubbin').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 737
        this.pokemon = 'Charjabug'
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Eléctrico,
        ]
        this.peso = 10.5
        this.altura = 0.5
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Item('Vikavolt', item.get('piedra trueno')),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('agarre'), 1],
            [move.get('bofetón lodo'), 7],
            [move.get('mordisco'), 10],
            [move.get('picadura'), 13],
            [move.get('chispa'), 16],
            [move.get('acróbata'), 19],
            [move.get('triturar'), 25],
            [move.get('tijera x'), 31],
            [move.get('excavar'), 37],
            [move.get('chispazo'), 43],
        ]
        this.stats = {
            hp: 57,
            attack: 82,
            defense: 95,
            spattack: 55,
            spdefense: 75,
            speed: 36,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}