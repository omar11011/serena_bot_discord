const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 517
        this.pokemon = 'Munna'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 23.3
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Item('Musharna', item.get('piedra lunar')),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('psicoonda'), 1],
            [move.get('psicorrayo'), 11],
            [move.get('cabezazo zen'), 23],
            [move.get('sincorruido'), 25],
            [move.get('premonición'), 31],
            [move.get('psíquico'), 37],
            [move.get('come sueños'), 41],
            [move.get('poder reserva'), 47],
        ]
        this.stats = {
            hp: 76,
            attack: 25,
            defense: 45,
            spattack: 67,
            spdefense: 55,
            speed: 24,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}