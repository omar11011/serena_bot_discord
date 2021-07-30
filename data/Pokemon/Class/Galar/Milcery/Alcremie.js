const Base = require('./Milcery').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 869
        this.pokemon = 'Alcremie'
        this.peso = 0.5
        this.altura = 0.3
        this.evolucion = [
            new Entidades.Evolucion.Gigamax('Alcremie Gigamax'),
        ]
        this.captura = 100
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('beso drenaje'), 51],
            [move.get('brillo mágico'), 40],
        ]
        this.stats = {
            hp: 65,
            attack: 60,
            defense: 75,
            spattack: 110,
            spdefense: 121,
            speed: 64,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}