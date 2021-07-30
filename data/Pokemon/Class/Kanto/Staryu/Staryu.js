const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 120
        this.pokemon = 'Staryu'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 34.5
        this.altura = 0.8
        this.grupoHuevo = [
            Entidades.Huevo.Agua3,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.AguaSalada
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Item('Starmie', item.get('piedra agua'))
        ]
        this.captura = 225
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('pistola agua'), 4],
            [move.get('giro rápido'), 7],
            [move.get('psicoonda'), 13],
            [move.get('rapidez'), 16],
            [move.get('rayo burbuja'), 18],
            [move.get('giro bola'), 24],
            [move.get('salmuera'), 28],
            [move.get('joya de luz'), 37],
            [move.get('psíquico'), 42],
            [move.get('hidrobomba'), 52],
        ]
        this.stats = {
            hp: 20,
            attack: 45,
            defense: 55,
            spattack: 70,
            spdefense: 55,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}