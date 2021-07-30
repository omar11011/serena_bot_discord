const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 682
        this.pokemon = 'Spritzee'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 0.5
        this.altura = 0.2
        this.grupoHuevo = [
            Entidades.Huevo.Hada,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Item('Aromatisse', item.get('saquito fragante')),
        ]
        this.captura = 200
        this.amistad = 50
        this.movimientos = [
            [move.get('viento feérico'), 1],
            [move.get('eco voz'), 13],
            [move.get('beso drenaje'), 21],
            [move.get('fuerza lunar'), 31],
            [move.get('azote'), 38],
            [move.get('psíquico'), 48],
            [move.get('voz cautivadora'), 50],
        ]
        this.stats = {
            hp: 78,
            attack: 52,
            defense: 60,
            spattack: 63,
            spdefense: 65,
            speed: 23,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}