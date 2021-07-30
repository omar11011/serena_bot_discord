const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 794
        this.pokemon = 'Buzzwole'
        this.region = Entidades.Region.Alola
        this.categoria = Entidades.Categoria.UltraEnte
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Lucha,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 333.6
        this.altura = 2.4
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Rojo
        this.evolucion = []
        this.captura = 25
        this.amistad = 0
        this.movimientos = [
            [move.get('aguijón letal'), 1],
            [move.get('puño trueno'), 1],
            [move.get('puño hielo'), 1],
            [move.get('inversión'), 1],
            [move.get('puño inrcemento'), 1],
            [move.get('puño cometa'), 7],
            [move.get('tiro vital'), 19],
            [move.get('chupavidas'), 29],
            [move.get('mega puño'), 37],
            [move.get('contraataque'), 43],
            [move.get('machada'), 47],
            [move.get('plancha'), 53],
            [move.get('puño dinámico'), 59],
            [move.get('fuerza bruta'), 67],
            [move.get('puño certero'), 73],
        ]
        this.stats = {
            hp: 107,
            attack: 139,
            defense: 139,
            spattack: 53,
            spdefense: 53,
            speed: 79,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}