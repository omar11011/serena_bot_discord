const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 249
        this.pokemon = 'Lugia'
        this.region = Entidades.Region.Johto
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Psíquico,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 216
        this.altura = 5.2
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Raro
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Lugia', item.get('lugianita')),
        ]
        this.captura = 3
        this.amistad = 0
        this.movimientos = [
            [move.get('meteorobola'), 1],
            [move.get('tornado'), 9],
            [move.get('carga dragón'), 15],
            [move.get('paranormal'), 23],
            [move.get('hidrobomba'), 37],
            [move.get('aerochorro'), 43],
            [move.get('castigo'), 50],
            [move.get('poder pasado'), 57],
            [move.get('premonición'), 79],
            [move.get('don natural'), 85],
            [move.get('ataque aéreo'), 99],
        ]
        this.stats = {
            hp: 106,
            attack: 90,
            defense: 130,
            spattack: 90,
            spdefense: 154,
            speed: 110,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}