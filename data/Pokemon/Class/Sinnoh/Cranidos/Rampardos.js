const Base = require('./Cranidos').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 409
        this.pokemon = 'Rampardos'
        this.peso = 102.5
        this.altura = 1.6
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Rampardos', item.get('rampardosita')),
        ]
        this.movimientos = [
            [move.get('golpe cabeza'), 1],
            [move.get('persecución'), 10],
            [move.get('derribo'), 15],
            [move.get('buena baza'), 24],
            [move.get('guardia baja'), 28],
            [move.get('esfuerzo'), 30],
            [move.get('poder pasado'), 36],
            [move.get('cabezazo zen'), 43],
            [move.get('testarazo'), 58],
        ]
        this.stats = {
            hp: 97,
            attack: 165,
            defense: 60,
            spattack: 65,
            spdefense: 50,
            speed: 58,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}