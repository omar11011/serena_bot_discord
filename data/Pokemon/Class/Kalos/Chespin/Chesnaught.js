const Base = require('./Quilladin').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 652
        this.pokemon = 'Chesnaught'
        this.tipo = [
            Entidades.Tipo.Planta,
            Entidades.Tipo.Lucha,
        ]
        this.peso = 90
        this.altura = 1.6
        this.evolucion = []
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('amago'), 1],
            [move.get('látigo cepa'), 5],
            [move.get('desenrollar'), 8],
            [move.get('mordisco'), 11],
            [move.get('pin misil'), 19],
            [move.get('brazo pincho'), 26],
            [move.get('derribo'), 29],
            [move.get('bomba germen'), 35],
            [move.get('disparo lodo'), 41],
            [move.get('golpe cuerpo'), 54],
            [move.get('mazazo'), 66],
            [move.get('machada'), 72],
            [move.get('giga impacto'), 78],
        ]
        this.stats = {
            hp: 88,
            attack: 107,
            defense: 122,
            spattack: 74,
            spdefense: 75,
            speed: 64,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}