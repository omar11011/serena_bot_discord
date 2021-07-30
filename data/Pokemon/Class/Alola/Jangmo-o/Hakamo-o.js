const Base = require('./Jangmo-o').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 783
        this.pokemon = 'Hakamo-o'
        this.tipo = [
            Entidades.Tipo.Dragón,
            Entidades.Tipo.Lucha,
        ]
        this.peso = 47
        this.altura = 1.2
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Kommo-o', 45),
        ]
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('cola dragón'), 17],
            [move.get('golpe cabeza'), 25],
            [move.get('gancho alto'), 35],
            [move.get('garra dragón'), 43],
            [move.get('enfado'), 58],
        ]
        this.stats = {
            hp: 55,
            attack: 75,
            defense: 90,
            spattack: 65,
            spdefense: 70,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}