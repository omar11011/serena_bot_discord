const Base = require('./GalarianSlowpoke').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 80
        this.pokemon = 'Slowbro de Galar'
        this.tipo = [
            Entidades.Tipo.Veneno,
            Entidades.Tipo.Psíquico,
        ]
        this.peso = 70.5
        this.altura = 1.6
        this.evolucion = []
        this.captura = 75
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('moluscañón'), 1],
            [move.get('ácido'), 9],
            [move.get('confusión'), 12],
            [move.get('hidropulso'), 18],
            [move.get('golpe cabeza'), 21],
            [move.get('cabezazo zen'), 24],
            [move.get('surf'), 30],
            [move.get('psíquico'), 36],
        ]
        this.stats = {
            hp: 95,
            attack: 100,
            defense: 95,
            spattack: 100,
            spdefense: 70,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}