const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 876
        this.pokemon = 'Indeedee'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Psíquico,
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 28
        this.altura = 0.9
        this.grupoHuevo = [
            Entidades.Huevo.Hada,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Morado
        this.evolucion = []
        this.captura = 30
        this.amistad = 140
        this.movimientos = [
            [move.get('poder reserva'), 1],
            [move.get('voz cautivadora'), 10],
            [move.get('psicorrayo'), 15],
            [move.get('psíquico'), 35],
            [move.get('última baza'), 55],
        ]
        this.stats = {
            hp: 60,
            attack: 65,
            defense: 55,
            spattack: 105,
            spdefense: 95,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}