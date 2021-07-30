const Base = require('./Seel').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 87
        this.pokemon = 'Dewgong'
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Hielo,
        ]
        this.peso = 120
        this.altura = 1.7
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('golpe cabeza'), 1],
            [move.get('doble rayo'), 7],
            [move.get('viento hielo'), 11],
            [move.get('canto helado'), 17],
            [move.get('rayo aurora'), 27],
            [move.get('acua jet'), 31],
            [move.get('salmuera'), 33],
            [move.get('derribo'), 39],
            [move.get('buceo'), 45],
            [move.get('acua cola'), 49],
            [move.get('rayo hielo'), 55],
            [move.get('frío polar'), 65],
        ]
        this.stats = {
            hp: 90,
            attack: 70,
            defense: 80,
            spattack: 70,
            spdefense: 95,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}