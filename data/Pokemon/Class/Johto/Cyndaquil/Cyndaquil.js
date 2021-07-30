const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 155
        this.pokemon = 'Cyndaquil'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Fuego,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 7.9
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Quilava', 14),
        ]
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('ascuas'), 10],
            [move.get('ataque rápido'), 13],
            [move.get('rueda fuego'), 19],
            [move.get('nitrocarga'), 28],
            [move.get('rapidez'), 31],
            [move.get('humareda'), 37],
            [move.get('lanzallamas'), 40],
            [move.get('infierno'), 46],
            [move.get('desenrollar'), 49],
            [move.get('doble filo'), 55],
            [move.get('llama final'), 58],
            [move.get('estallido'), 64],
        ]
        this.stats = {
            hp: 39,
            attack: 52,
            defense: 43,
            spattack: 60,
            spdefense: 50,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}