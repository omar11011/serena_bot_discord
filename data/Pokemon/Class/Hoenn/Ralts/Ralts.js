const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 280
        this.pokemon = 'Ralts'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Psíquico,
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 6.6
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Amorfo,
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Ciudad
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Kirlia', 20),
        ]
        this.captura = 235
        this.amistad = 35
        this.movimientos = [
            [move.get('confusión'), 1],
            [move.get('voz cautivadora'), 11],
            [move.get('hoja mágica'), 17],
            [move.get('beso drenaje'), 22],
            [move.get('psíquico'), 27],
            [move.get('premonición'), 32],
            [move.get('come sueños'), 39],
            [move.get('poder reserva'), 42],
        ]
        this.stats = {
            hp: 28,
            attack: 25,
            defense: 25,
            spattack: 45,
            spdefense: 35,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}