const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 684
        this.pokemon = 'Swirlix'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 3.5
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Hada,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Intercambio('Slurpuff', item.get('dulce de nata')),
        ]
        this.captura = 200
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('viento feérico'), 5],
            [move.get('canon'), 13],
            [move.get('esfuerzo'), 21],
            [move.get('beso drenaje'), 31],
            [move.get('energibola'), 36],
            [move.get('carantoña'), 49],
        ]
        this.stats = {
            hp: 62,
            attack: 48,
            defense: 66,
            spattack: 59,
            spdefense: 57,
            speed: 49,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}