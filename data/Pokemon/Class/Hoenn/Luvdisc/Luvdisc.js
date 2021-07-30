const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 370
        this.pokemon = 'Luvdisc'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 8.7
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Agua2,
        ]
        this.probMacho = 0.25
        this.probHembra = 0.75
        this.habitat = Entidades.Habitat.AguaSalada
        this.color = Entidades.Color.Rosa
        this.evolucion = []
        this.captura = 225
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('pistola agua'), 4],
            [move.get('beso drenaje'), 9],
            [move.get('hidropulso'), 17],
            [move.get('azote'), 27],
            [move.get('derribo'), 37],
            [move.get('hidrobomba'), 50],
        ]
        this.stats = {
            hp: 43,
            attack: 30,
            defense: 55,
            spattack: 40,
            spdefense: 65,
            speed: 97,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}