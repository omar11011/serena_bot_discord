const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 476
        this.pokemon = 'Probopass'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Roca,
            Entidades.Tipo.Acero,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 340
        this.altura = 1.4
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Gris
        this.evolucion = []
        this.captura = 60
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('bomba imán'), 10],
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
            hp: 60,
            attack: 55,
            defense: 145,
            spattack: 75,
            spdefense: 150,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}