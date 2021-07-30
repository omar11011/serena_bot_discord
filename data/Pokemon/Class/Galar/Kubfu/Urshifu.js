const Base = require('./Kubfu').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 892
        this.spawn = false
        this.pokemon = 'Urshifu'
        this.tipo = [
            Entidades.Tipo.Lucha,
            Entidades.Tipo.Siniestro,
        ]
        this.peso = 105
        this.altura = 1.9
        this.evolucion = []
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
            [move.get('golpe oscuro'), 44],
            [move.get('puño certero'), 52],
        ]
        this.stats = {
            hp: 100,
            attack: 130,
            defense: 100,
            spattack: 63,
            spdefense: 60,
            speed: 97,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}