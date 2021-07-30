const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 227
        this.pokemon = 'Skarmory'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Acero,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 50.5
        this.altura = 1.7
        this.grupoHuevo = [
            Entidades.Huevo.Volador,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Campo
        this.color = Entidades.Color.Gris
        this.evolucion = []
        this.captura = 25
        this.amistad = 50
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('garra metal'), 9],
            [move.get('aire afilado'), 12],
            [move.get('rapidez'), 23],
            [move.get('ala de acero'), 34],
            [move.get('cuchillada'), 39],
            [move.get('tajo aéreo'), 45],
            [move.get('tajo umbrío'), 53],
        ]
        this.stats = {
            hp: 65,
            attack: 80,
            defense: 140,
            spattack: 40,
            spdefense: 70,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}