const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 222
        this.pokemon = 'Corsola'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Roca,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 5
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Agua3,
        ]
        this.probMacho = 0.25
        this.probHembra = 0.75
        this.habitat = Entidades.Habitat.AguaSalada
        this.color = Entidades.Color.Rosa
        this.evolucion = []
        this.captura = 60
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('burbuja'), 4],
            [move.get('rayo burbuja'), 10],
            [move.get('poder pasado'), 17],
            [move.get('clavo cañón'), 20],
            [move.get('salmuera'), 27],
            [move.get('pedrada'), 31],
            [move.get('joya de luz'), 41],
            [move.get('manto espejo'), 45],
            [move.get('tierra viva'), 47],
            [move.get('azote'), 50],
        ]
        this.stats = {
            hp: 65,
            attack: 55,
            defense: 95,
            spattack: 65,
            spdefense: 95,
            speed: 35,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}