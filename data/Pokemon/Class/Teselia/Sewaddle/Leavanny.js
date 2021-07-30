const Base = require('./Sewaddle').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 542
        this.pokemon = 'Leavanny'
        this.peso = 20.5
        this.altura = 1.2
        this.color = Entidades.Color.Amarillo
        this.evolucion = []
        this.captura = 45
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('falsotortazo'), 1],
            [move.get('picadura'), 8],
            [move.get('hoja afilada'), 15],
            [move.get('estoicismo'), 23],
            [move.get('cuchillada'), 29],
            [move.get('aguijón letal'), 34],
            [move.get('hoja aguda'), 36],
            [move.get('tijera x'), 39],
            [move.get('azote'), 47],
            [move.get('lluevehojas'), 50],
        ]
        this.stats = {
            hp: 75,
            attack: 103,
            defense: 80,
            spattack: 70,
            spdefense: 80,
            speed: 92,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}