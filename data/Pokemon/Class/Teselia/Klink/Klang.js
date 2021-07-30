const Base = require('./Klink').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 600
        this.pokemon = 'Klang'
        this.peso = 51
        this.altura = 0.6
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Klinklang', 49),
        ]
        this.captura = 60
        this.movimientos = [
            [move.get('agarre'), 1],
            [move.get('impactrueno'), 11],
            [move.get('rueda doble'), 16],
            [move.get('atadura'), 21],
            [move.get('rayo carga'), 26],
            [move.get('disparo espejo'), 36],
            [move.get('chispazo'), 44],
            [move.get('electrocañón'), 60],
            [move.get('hiperrayo'), 64],
        ]
        this.stats = {
            hp: 60,
            attack: 80,
            defense: 95,
            spattack: 70,
            spdefense: 85,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}