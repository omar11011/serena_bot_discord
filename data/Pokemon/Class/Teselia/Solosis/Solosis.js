const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 577
        this.pokemon = 'Solosis'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Psíquico,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 1
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Amorfo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Duosion', 32),
        ]
        this.captura = 200
        this.amistad = 50
        this.movimientos = [
            [move.get('psicoonda'), 1],
            [move.get('desenrollar'), 7],
            [move.get('poder oculto'), 14],
            [move.get('psicocarga'), 25],
            [move.get('esfuerzo'), 28],
            [move.get('premonición'), 31],
            [move.get('psíquico'), 37],
        ]
        this.stats = {
            hp: 45,
            attack: 30,
            defense: 40,
            spattack: 105,
            spdefense: 50,
            speed: 20,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}