const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 199
        this.pokemon = 'Slowking'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 79.5
        this.altura = 2
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
            Entidades.Huevo.Agua1,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.habitat = Entidades.Habitat.AguaDulce
        this.color = Entidades.Color.Rosa
        this.evolucion = []
        this.captura = 70
        this.amistad = 70
        this.movimientos = [
            [move.get('joya de luz'), 1],
            [move.get('poder oculto'), 1],
            [move.get('placaje'), 1],
            [move.get('pistola agua'), 9],
            [move.get('confusión'), 14],
            [move.get('golpe cabeza'), 23],
            [move.get('hidropulso'), 28],
            [move.get('cabezazo zen'), 32],
            [move.get('psíquico'), 45],
            [move.get('as oculto'), 49],
        ]
        this.stats = {
            hp: 95,
            attack: 75,
            defense: 80,
            spattack: 100,
            spdefense: 110,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}