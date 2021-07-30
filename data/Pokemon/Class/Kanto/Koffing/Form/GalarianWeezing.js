const Base = require('./GalarianKoffing').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 110
        this.pokemon = 'Weezing de Galar'
        this.peso = 16
        this.altura = 3
        this.color = Entidades.Color.Gris
        this.evolucion = []
        this.captura = 60
        this.movimientos = [
            [move.get('viento feérico'), 1],
            [move.get('placaje'), 1],
            [move.get('polución'), 1],
            [move.get('onda ígnea'), 1],
            [move.get('doble golpe'), 1],
            [move.get('niebla clara'), 12],
            [move.get('buena baza'), 20],
            [move.get('residuos'), 24],
            [move.get('bomba lodo'), 32],
            [move.get('tóxico'), 38],
            [move.get('eructo'), 44],
        ]
        this.stats = {
            hp: 65,
            attack: 90,
            defense: 120,
            spattack: 85,
            spdefense: 70,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}