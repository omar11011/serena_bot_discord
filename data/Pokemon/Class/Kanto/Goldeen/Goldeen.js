const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 118
        this.pokemon = 'Goldeen'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 15
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Agua2,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaDulce
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Seaking', 33)
        ]
        this.captura = 225
        this.amistad = 50
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('placaje'), 1],
            [move.get('cornada'), 8],
            [move.get('azote'), 13],
            [move.get('hidropulso'), 16],
            [move.get('ataque furia'), 24],
            [move.get('cascada'), 32],
            [move.get('perforador'), 37],
            [move.get('mega cuerno'), 45],
        ]
        this.stats = {
            hp: 45,
            attack: 67,
            defense: 60,
            spattack: 35,
            spdefense: 50,
            speed: 63,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}