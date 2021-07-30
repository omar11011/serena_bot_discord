const Base = require('./Grookey').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 811
        this.pokemon = 'Thwackey'
        this.peso = 14
        this.altura = 0.7
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Rillaboom', 35),
        ]
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('doble golpe'), 1],
            [move.get('punzada rama'), 6],
            [move.get('hoja afilada'), 12],
            [move.get('desarme'), 24],
            [move.get('atizar'), 30],
            [move.get('alboroto'), 36],
            [move.get('mazazo'), 42],
            [move.get('esfuerzo'), 48],
        ]
        this.stats = {
            hp: 70,
            attack: 85,
            defense: 70,
            spattack: 55,
            spdefense: 60,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}