const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 806
        this.pokemon = 'Blacephalon'
        this.region = Entidades.Region.Alola
        this.categoria = Entidades.Categoria.UltraEnte
        this.tipo = [
            Entidades.Tipo.Fuego,
            Entidades.Tipo.Fantasma,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 13
        this.altura = 1.8
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Blanco
        this.evolucion = []
        this.captura = 30
        this.amistad = 0
        this.movimientos = [
            [move.get('ascuas'), 1],
            [move.get('impresionar'), 1],
            [move.get('poder reserva'), 13],
            [move.get('pirotecnia'), 17],
            [move.get('tinieblas'), 23],
            [move.get('llamarada'), 37],
            [move.get('bola sombra'), 41],
            [move.get('cabeza sorpresa'), 59],
        ]
        this.stats = {
            hp: 53,
            attack: 127,
            defense: 53,
            spattack: 151,
            spdefense: 79,
            speed: 107,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}