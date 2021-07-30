const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 170
        this.pokemon = 'Chinchou'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Eléctrico,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 12
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Agua2,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaSalada
        this.color = Entidades.Color.Azul
        this.evolucion = []
        this.captura = 190
        this.amistad = 70
        this.movimientos = [
            [move.get('burbuja'), 1],
            [move.get('bola voltio'), 9],
            [move.get('pistola agua'), 12],
            [move.get('rayo burbuja'), 20],
            [move.get('chispa'), 23],
            [move.get('doble rayo'), 28],
            [move.get('azote'), 31],
            [move.get('chispazo'), 34],
            [move.get('derribo'), 39],
            [move.get('hidrobomba'), 45],
        ]
        this.stats = {
            hp: 75,
            attack: 38,
            defense: 38,
            spattack: 56,
            spdefense: 56,
            speed: 67,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}