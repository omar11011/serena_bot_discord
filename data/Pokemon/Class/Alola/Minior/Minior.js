const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 774
        this.pokemon = 'Minior'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Roca,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 40
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Marrón
        this.evolucion = []
        this.captura = 30
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('desenrollar'), 8],
            [move.get('rapidez'), 15],
            [move.get('poder pasado'), 17],
            [move.get('derribo'), 29],
            [move.get('joya de luz'), 38],
            [move.get('doble filo'), 43],
        ]
        this.stats = {
            hp: 60,
            attack: 60,
            defense: 100,
            spattack: 60,
            spdefense: 100,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}