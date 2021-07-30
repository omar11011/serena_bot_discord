const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 242
        this.pokemon = 'Blissey'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 46.8
        this.altura = 1.5
        this.grupoHuevo = [
            Entidades.Huevo.Hada,
        ]
        this.probMacho = 0
        this.probHembra = 1
        this.habitat = Entidades.Habitat.Ciudad
        this.color = Entidades.Color.Rosa
        this.evolucion = []
        this.captura = 30
        this.amistad = 140
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('doble bofetón'), 12],
            [move.get('derribo'), 27],
            [move.get('lanzamiento'), 34],
            [move.get('bomba huevo'), 42],
            [move.get('doble filo'), 54],
        ]
        this.stats = {
            hp: 255,
            attack: 10,
            defense: 10,
            spattack: 75,
            spdefense: 135,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}