const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 201
        this.pokemon = 'Unown'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 5
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Raro
        this.color = Entidades.Color.Negro
        this.evolucion = []
        this.captura = 225
        this.amistad = 70
        this.movimientos = [
            [move.get('poder oculto'), 1],
        ]
        this.stats = {
            hp: 48,
            attack: 72,
            defense: 48,
            spattack: 72,
            spdefense: 48,
            speed: 48,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}