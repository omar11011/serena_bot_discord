const Base = require('./Bellsprout').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 70
        this.pokemon = 'Weepinbell'
        this.peso = 6.4
        this.altura = 1
        this.evolucion = [
            new Entidades.Evolucion.Item('Victreebel', item.get('piedra hoja')),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('látigo cepa'), 1],
            [move.get('constricción'), 11],
            [move.get('ácido'), 24],
            [move.get('desarme'), 29],
            [move.get('hoja afilada'), 44],
            [move.get('puya nociva'), 47],
            [move.get('atizar'), 54],
            [move.get('estrujón'), 58],
        ]
        this.stats = {
            hp: 65,
            attack: 90,
            defense: 50,
            spattack: 85,
            spdefense: 45,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}