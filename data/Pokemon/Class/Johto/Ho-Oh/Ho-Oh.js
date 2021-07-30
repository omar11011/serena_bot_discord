const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 250
        this.pokemon = 'Ho-Oh'
        this.region = Entidades.Region.Johto
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Fuego,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 199
        this.altura = 3.8
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Raro
        this.color = Entidades.Color.Rojo
        this.evolucion = []
        this.captura = 3
        this.amistad = 0
        this.movimientos = [
            [move.get('meteorobola'), 1],
            [move.get('tornado'), 9],
            [move.get('pájaro osado'), 15],
            [move.get('paranormal'), 23],
            [move.get('llamarada'), 37],
            [move.get('fuego sagrado'), 43],
            [move.get('castigo'), 50],
            [move.get('poder pasado'), 57],
            [move.get('premonición'), 79],
            [move.get('don natural'), 85],
            [move.get('ataque aéreo'), 99],
        ]
        this.stats = {
            hp: 106,
            attack: 130,
            defense: 90,
            spattack: 110,
            spdefense: 154,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}