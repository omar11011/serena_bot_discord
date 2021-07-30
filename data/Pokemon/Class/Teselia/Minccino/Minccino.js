const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 572
        this.pokemon = 'Minccino'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 5.8
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.25
        this.probHembra = 0.75
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Item('Cinccino', item.get('piedra día')),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('doble bofetón'), 13],
            [move.get('rapidez'), 19],
            [move.get('plumerazo'), 25],
            [move.get('espabila'), 31],
            [move.get('eco voz'), 33],
            [move.get('atizar'), 37],
            [move.get('vozarrón'), 43],
            [move.get('última baza'), 45],
        ]
        this.stats = {
            hp: 55,
            attack: 50,
            defense: 40,
            spattack: 40,
            spdefense: 40,
            speed: 75,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}