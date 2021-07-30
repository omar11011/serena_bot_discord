const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 566
        this.pokemon = 'Archen'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Roca,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 9.5
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Volador,
            Entidades.Huevo.Agua3,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Archeops', 37),
        ]
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('ataque rápido'), 1],
            [move.get('ataque ala'), 1],
            [move.get('lanzarrocas'), 5],
            [move.get('picoteo'), 15],
            [move.get('poder pasado'), 18],
            [move.get('acróbata'), 28],
            [move.get('dragoaliento'), 31],
            [move.get('triturar'), 35],
            [move.get('esfuerzo'), 38],
            [move.get('avalancha'), 45],
            [move.get('garra dragón'), 48],
            [move.get('golpe'), 50],
        ]
        this.stats = {
            hp: 55,
            attack: 112,
            defense: 45,
            spattack: 74,
            spdefense: 45,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}