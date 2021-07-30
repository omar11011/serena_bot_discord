const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 765
        this.pokemon = 'Oranguru'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Normal,
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 76
        this.altura = 1.5
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Blanco
        this.evolucion = []
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('confusión'), 1],
            [move.get('poder reserva'), 15],
            [move.get('finta'), 22],
            [move.get('cabezazo zen'), 29],
            [move.get('juego sucio'), 36],
            [move.get('psíquico'), 43],
            [move.get('premonición'), 46],
        ]
        this.stats = {
            hp: 90,
            attack: 60,
            defense: 80,
            spattack: 90,
            spdefense: 110,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}