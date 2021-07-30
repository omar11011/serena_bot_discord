const Base = require('../Lugia').class
const Entidades = require('../../../../../index')
const move = require('../../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.spawn = false
        this.pokedex = false
        this.redeem = true
        this.pokemon = 'Lugia Oscuro'
        this.tipo = [
            Entidades.Tipo.Oscuro,
            Entidades.Tipo.Psíquico,
            Entidades.Tipo.Volador,
        ]
        this.peso = 218
        this.altura = 5.3
        this.color = Entidades.Color.Negro
        this.evolucion = []
        this.movimientos = [
            [move.get('tornado'), 1],
            [move.get('confusión'), 1],
            [move.get('ataque rápido'), 9],
            [move.get('carga dragón'), 15],
            [move.get('rayo oscuro'), 23],
            [move.get('derribo'), 30],
            [move.get('soplo oscuro'), 40],
            [move.get('pájaro osado'), 50],
            [move.get('tifón oscuro'), 60],
            [move.get('fin oscuro'), 75],
            [move.get('golpe'), 75],
            [move.get('premonición'), 80],
            [move.get('ataque aéreo'), 95],
        ]
        this.stats = {
            hp: 116,
            attack: 130,
            defense: 95,
            spattack: 154,
            spdefense: 95,
            speed: 140,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}