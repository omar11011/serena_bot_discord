const Base = require('./Tepig').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 499
        this.pokemon = 'Pignite'
        this.tipo = [
            Entidades.Tipo.Fuego,
            Entidades.Tipo.Lucha,
        ]
        this.peso = 55
        this.altura = 1
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Emboar', 36),
        ]
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('ascuas'), 7],
            [move.get('nitrocarga'), 15],
            [move.get('empujón'), 17],
            [move.get('polución'), 20],
            [move.get('desenrollar'), 23],
            [move.get('derribo'), 28],
            [move.get('golpe calor'), 31],
            [move.get('buena baza'), 36],
            [move.get('lanzallamas'), 39],
            [move.get('testarazo'), 44],
            [move.get('envite ígneo'), 52],
        ]
        this.stats = {
            hp: 95,
            attack: 93,
            defense: 55,
            spattack: 70,
            spdefense: 55,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}