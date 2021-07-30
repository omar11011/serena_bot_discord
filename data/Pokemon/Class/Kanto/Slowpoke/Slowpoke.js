const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 79
        this.pokemon = 'Slowpoke'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 36
        this.altura = 1.2
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
            Entidades.Huevo.Agua1,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.AguaDulce
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Slowbro', 37),
            new Entidades.Evolucion.Intercambio('Slowking', item.get('roca del rey')),
        ]
        this.captura = 190
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('pistola agua'), 9],
            [move.get('confusión'), 14],
            [move.get('golpe cabeza'), 23],
            [move.get('hidropulso'), 28],
            [move.get('cabezazo zen'), 32],
            [move.get('psíquico'), 45],
        ]
        this.stats = {
            hp: 90,
            attack: 65,
            defense: 65,
            spattack: 40,
            spdefense: 40,
            speed: 15,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}