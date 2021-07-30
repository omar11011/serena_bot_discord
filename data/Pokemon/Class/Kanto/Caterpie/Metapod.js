const Base = require('./Caterpie').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 11
        this.pokemon = 'Metapod'
        this.peso = 9.9
        this.altura = 0.7
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Butterfree', 10),
        ]
        this.captura = 120
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('picadura'), 7],
        ]
        this.stats = {
            hp: 50,
            attack: 20,
            defense: 55,
            spattack: 25,
            spdefense: 25,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}