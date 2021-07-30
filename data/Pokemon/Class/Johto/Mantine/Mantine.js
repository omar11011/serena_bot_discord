const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 226
        this.pokemon = 'Mantine'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 220
        this.altura = 2.1
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaSalada
        this.color = Entidades.Color.Morado
        this.evolucion = []
        this.captura = 25
        this.amistad = 50
        this.movimientos = [
            [move.get('recurrente'), 1],
            [move.get('doble rayo'), 1],
            [move.get('placaje'), 1],
            [move.get('burbuja'), 1],
            [move.get('rayo burbuja'), 7],
            [move.get('ataque ala'), 14],
            [move.get('golpe cabeza'), 16],
            [move.get('hidropulso'), 19],
            [move.get('derribo'), 31],
            [move.get('tajo aéreo'), 36],
            [move.get('acua aro'), 39],
            [move.get('bote'), 46],
            [move.get('hidrobomba'), 49],
        ]
        this.stats = {
            hp: 85,
            attack: 40,
            defense: 70,
            spattack: 80,
            spdefense: 140,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}