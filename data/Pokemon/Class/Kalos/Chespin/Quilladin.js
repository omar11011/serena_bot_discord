const Base = require('./Chespin').class
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 651
        this.pokemon = 'Quilladin'
        this.tipo = [
            Entidades.Tipo.Planta,
        ]
        this.peso = 29
        this.altura = 0.7
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Chesnaught', 36),
        ]
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('látigo cepa'), 5],
            [move.get('desenrollar'), 8],
            [move.get('mordisco'), 11],
            [move.get('pin misil'), 19],
            [move.get('derribo'), 29],
            [move.get('bomba germen'), 35],
            [move.get('disparo lodo'), 39],
            [move.get('golpe cuerpo'), 48],
            [move.get('mazazo'), 56],
        ]
        this.stats = {
            hp: 61,
            attack: 78,
            defense: 95,
            spattack: 56,
            spdefense: 58,
            speed: 57,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}