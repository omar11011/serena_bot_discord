const Base = require('./Mareep').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 180
        this.pokemon = 'Flaaffy'
        this.peso = 13.3
        this.altura = 0.8
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Ampharos', 30),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('impactrueno'), 8],
            [move.get('derribo'), 20],
            [move.get('bola voltio'), 25],
            [move.get('joya de luz'), 34],
            [move.get('chispazo'), 38],
            [move.get('doble rayo'), 47],
            [move.get('trueno'), 56],
        ]
        this.stats = {
            hp: 70,
            attack: 55,
            defense: 55,
            spattack: 80,
            spdefense: 60,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}