const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 482
        this.pokemon = 'Azelf'
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
        this.color = Entidades.Color.Azul
        this.evolucion = []
        this.captura = 3
        this.amistad = 140
        this.movimientos = [
            [move.get('confusión'), 1],
            [move.get('rapidez'), 21],
            [move.get('alboroto'), 31],
            [move.get('premonición'), 36],
            [move.get('paranormal'), 50],
            [move.get('última baza'), 61],
            [move.get('don natural'), 66],
        ]
        this.stats = {
            hp: 75,
            attack: 125,
            defense: 70,
            spattack: 125,
            spdefense: 70,
            speed: 115,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}