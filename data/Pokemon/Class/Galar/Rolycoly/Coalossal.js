const Base = require('./Carkol').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 839
        this.pokemon = 'Coalossal'
        this.peso = 310
        this.altura = 2.8
        this.evolucion = [
            new Entidades.Evolucion.Gigamax('Coalossal Gigamax'),
        ]
        this.captura = 45
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('giro rápido'), 5],
            [move.get('antiaéreo'), 10],
            [move.get('nitrocarga'), 18],
            [move.get('poder pasado'), 20],
            [move.get('calcinación'), 27],
            [move.get('golpe calor'), 45],
            [move.get('pedrada'), 54],
            [move.get('llama final'), 63],
        ]
        this.stats = {
            hp: 110,
            attack: 80,
            defense: 120,
            spattack: 80,
            spdefense: 90,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}