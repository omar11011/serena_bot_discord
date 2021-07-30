const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 766
        this.pokemon = 'Passimian'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Lucha,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 82.8
        this.altura = 2
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Blanco
        this.evolucion = []
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('golpe roca'), 8],
            [move.get('paliza'), 15],
            [move.get('derribo'), 22],
            [move.get('golpe'), 29],
            [move.get('doble filo'), 36],
            [move.get('lanzamiento'), 39],
            [move.get('a bocajarro'), 43],
            [move.get('inversión'), 46],
            [move.get('giga impacto'), 50],
        ]
        this.stats = {
            hp: 100,
            attack: 120,
            defense: 90,
            spattack: 40,
            spdefense: 70,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}