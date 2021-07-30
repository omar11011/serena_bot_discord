const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 299
        this.pokemon = 'Nosepass'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Roca,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 97
        this.altura = 1
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Caverna
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Probopass', 45),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('lanzarrocas'), 10],
            [move.get('chispa'), 19],
            [move.get('avalancha'), 22],
            [move.get('joya de luz'), 25],
            [move.get('pedrada'), 28],
            [move.get('chispazo'), 31],
            [move.get('tierra viva'), 37],
            [move.get('roca afilada'), 40],
            [move.get('electrocañón'), 43],
        ]
        this.stats = {
            hp: 30,
            attack: 45,
            defense: 135,
            spattack: 45,
            spdefense: 90,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}