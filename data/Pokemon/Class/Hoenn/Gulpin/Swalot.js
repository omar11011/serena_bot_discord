const Base = require('./Gulpin').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 317
        this.pokemon = 'Swalot'
        this.peso = 80
        this.altura = 1.7
        this.color = Entidades.Color.Morado
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('residuos'), 10],
            [move.get('bomba ácida'), 17],
            [move.get('golpe cuerpo'), 26],
            [move.get('escupir'), 30],
            [move.get('bomba lodo'), 37],
            [move.get('eructo'), 49],
            [move.get('estrujón'), 54],
            [move.get('lanza mugre'), 61],
        ]
        this.stats = {
            hp: 100,
            attack: 73,
            defense: 83,
            spattack: 73,
            spdefense: 83,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}