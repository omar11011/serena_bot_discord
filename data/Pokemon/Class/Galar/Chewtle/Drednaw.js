const Base = require('./Chewtle').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 834
        this.pokemon = 'Drednaw'
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Roca,
        ]
        this.peso = 115.5
        this.altura = 1
        this.evolucion = [
            new Entidades.Evolucion.Gigamax('Drednaw Gigamax'),
        ]
        this.captura = 75
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('pistola agua'), 1],
            [move.get('tumba rocas'), 1],
            [move.get('mordisco'), 7],
            [move.get('golpe cabeza'), 21],
            [move.get('contraataque'), 30],
            [move.get('presa maxilar'), 39],
            [move.get('hidroariete'), 48],
            [move.get('golpe cuerpo'), 57],
            [move.get('testarazo'), 66],
        ]
        this.stats = {
            hp: 90,
            attack: 115,
            defense: 90,
            spattack: 48,
            spdefense: 68,
            speed: 74,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}