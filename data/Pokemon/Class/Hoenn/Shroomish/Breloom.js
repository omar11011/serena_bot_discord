const Base = require('./Shroomish').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 286
        this.pokemon = 'Breloom'
        this.tipo = [
            Entidades.Tipo.Planta,
            Entidades.Tipo.Lucha,
        ]
        this.peso = 39.2
        this.altura = 1.2
        this.color = Entidades.Color.Verde
        this.evolucion = []
        this.captura = 90
        this.movimientos = [
            [move.get('absorber'), 1],
            [move.get('placaje'), 1],
            [move.get('megaagotar'), 12],
            [move.get('golpe cabeza'), 15],
            [move.get('amago'), 19],
            [move.get('contraataque'), 22],
            [move.get('ultra puño'), 23],
            [move.get('palmeo'), 28],
            [move.get('gancho alto'), 39],
            [move.get('bomba germen'), 44],
            [move.get('puño dinámico'), 50],
        ]
        this.stats = {
            hp: 60,
            attack: 130,
            defense: 80,
            spattack: 60,
            spdefense: 60,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}