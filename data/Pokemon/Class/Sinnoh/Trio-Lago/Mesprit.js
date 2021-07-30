const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 481
        this.pokemon = 'Mesprit'
        this.region = Entidades.Region.Sinnoh
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 0.3
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Rosa
        this.evolucion = []
        this.captura = 3
        this.amistad = 140
        this.movimientos = [
            [move.get('confusión'), 1],
            [move.get('rapidez'), 21],
            [move.get('premonición'), 36],
            [move.get('paranormal'), 50],
            [move.get('don natural'), 66],
        ]
        this.stats = {
            hp: 80,
            attack: 105,
            defense: 105,
            spattack: 105,
            spdefense: 105,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}