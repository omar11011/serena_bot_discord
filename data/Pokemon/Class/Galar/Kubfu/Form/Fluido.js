const Base = require('../Urshifu').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.pokedex = false
        this.pokemon = 'Urshifu Fluido'
        this.tipo = [
            Entidades.Tipo.Lucha,
            Entidades.Tipo.Agua,
        ]
        this.evolucion = [
            new Entidades.Evolucion.Gigamax('Urshifu Fluido Gigamax'),
        ]
        this.movimientos = [
            [move.get('golpe roca'), 1],
            [move.get('acua jet'), 1],
            [move.get('golpe aéreo'), 12],
            [move.get('golpe cabeza'), 20],
            [move.get('demolición'), 24],
            [move.get('cabeza de hierro'), 36],
            [move.get('puño dinámico'), 40],
            [move.get('contraataque'), 44],
            [move.get('a bocajarro'), 48],
            [move.get('azote torrencial'), 44],
            [move.get('puño certero'), 52],
        ]
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}