const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 676
        this.pokemon = 'Furfrou'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 28
        this.altura = 1.2
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Blanco
        this.evolucion = []
        this.captura = 160
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('golpe cabeza'), 12],
            [move.get('mordisco'), 22],
            [move.get('represalia'), 33],
            [move.get('derribo'), 35],
            [move.get('golpe bajo'), 42],
        ]
        this.stats = {
            hp: 75,
            attack: 80,
            defense: 60,
            spattack: 65,
            spdefense: 90,
            speed: 102,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}