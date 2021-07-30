const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 805
        this.pokemon = 'Stakataka'
        this.region = Entidades.Region.Alola
        this.categoria = Entidades.Categoria.UltraEnte
        this.tipo = [
            Entidades.Tipo.Roca,
            Entidades.Tipo.Acero,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 820
        this.altura = 5.5
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Gris
        this.evolucion = []
        this.captura = 30
        this.amistad = 0
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('avalancha'), 5],
            [move.get('derribo'), 19],
            [move.get('lanzarrocas'), 23],
            [move.get('cabeza de hierro'), 43],
            [move.get('pedrada'), 47],
            [move.get('doble filo'), 61],
        ]
        this.stats = {
            hp: 61,
            attack: 131,
            defense: 211,
            spattack: 53,
            spdefense: 101,
            speed: 12,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}