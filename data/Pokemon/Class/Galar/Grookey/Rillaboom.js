const Base = require('./Thwackey').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 812
        this.pokemon = 'Rillaboom'
        this.peso = 90
        this.altura = 2.1
        this.evolucion = [
            new Entidades.Evolucion.Gigamax('Rillaboom Gigamax'),
        ]
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('doble golpe'), 1],
            [move.get('punzada rama'), 6],
            [move.get('hoja afilada'), 12],
            [move.get('desarme'), 24],
            [move.get('atizar'), 30],
            [move.get('batería asalto'), 35],
            [move.get('alboroto'), 38],
            [move.get('mazazo'), 46],
            [move.get('esfuerzo'), 54],
            [move.get('estruendo'), 62],
        ]
        this.stats = {
            hp: 100,
            attack: 125,
            defense: 90,
            spattack: 60,
            spdefense: 70,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}