const Base = require('./Rolycoly').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 838
        this.pokemon = 'Carkol'
        this.tipo = [
            Entidades.Tipo.Roca,
            Entidades.Tipo.Fuego,
        ]
        this.peso = 78
        this.altura = 1.1
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Coalossal', 34),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('giro rápido'), 5],
            [move.get('antiaéreo'), 10],
            [move.get('nitrocarga'), 18],
            [move.get('poder pasado'), 20],
            [move.get('calcinación'), 27],
            [move.get('golpe calor'), 41],
            [move.get('pedrada'), 48],
            [move.get('llama final'), 55],
        ]
        this.stats = {
            hp: 80,
            attack: 60,
            defense: 90,
            spattack: 60,
            spdefense: 70,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}