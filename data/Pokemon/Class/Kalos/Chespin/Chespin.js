const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 650
        this.pokemon = 'Chespin'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 9
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Quilladin', 16),
        ]
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('látigo cepa'), 5],
            [move.get('desenrollar'), 8],
            [move.get('mordisco'), 11],
            [move.get('pin misil'), 18],
            [move.get('derribo'), 27],
            [move.get('bomba germen'), 32],
            [move.get('disparo lodo'), 35],
            [move.get('golpe cuerpo'), 42],
            [move.get('mazazo'), 48],
        ]
        this.stats = {
            hp: 56,
            attack: 61,
            defense: 65,
            spattack: 48,
            spdefense: 56,
            speed: 38,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}