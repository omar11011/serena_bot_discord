const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 203
        this.pokemon = 'Girafarig'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Normal,
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 41.5
        this.altura = 1.5
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Amarillo
        this.evolucion = []
        this.captura = 60
        this.amistad = 70
        this.movimientos = [
            [move.get('impresionar'), 1],
            [move.get('placaje'), 1],
            [move.get('confusión'), 1],
            [move.get('buena baza'), 10],
            [move.get('pisotón'), 14],
            [move.get('psicorrayo'), 19],
            [move.get('doble golpe'), 28],
            [move.get('cabezazo zen'), 32],
            [move.get('triturar'), 37],
            [move.get('psíquico'), 50],
        ]
        this.stats = {
            hp: 70,
            attack: 80,
            defense: 65,
            spattack: 90,
            spdefense: 65,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}