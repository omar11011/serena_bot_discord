const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 96
        this.pokemon = 'Drowzee'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 32.4
        this.altura = 1
        this.grupoHuevo = [
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Hypno', 26),
        ]
        this.captura = 190
        this.amistad = 70
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('confusión'), 9],
            [move.get('golpe cabeza'), 13],
            [move.get('golpes furia'), 17],
            [move.get('psicorrayo'), 25],
            [move.get('sincorruido'), 37],
            [move.get('cabezazo zen'), 41],
            [move.get('psíquico'), 49],
            [move.get('psicocarga'), 57],
            [move.get('premonición'), 61],
        ]
        this.stats = {
            hp: 60,
            attack: 48,
            defense: 45,
            spattack: 43,
            spdefense: 90,
            speed: 42,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}