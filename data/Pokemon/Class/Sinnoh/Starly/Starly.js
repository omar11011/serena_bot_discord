const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 396
        this.pokemon = 'Starly'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Normal,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 2
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Volador,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Staravia', 14),
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('ataque rápido'), 5],
            [move.get('ataque ala'), 9],
            [move.get('esfuerzo'), 17],
            [move.get('golpe aéreo'), 25],
            [move.get('derribo'), 29],
            [move.get('pájaro osado'), 37],
        ]
        this.stats = {
            hp: 40,
            attack: 55,
            defense: 30,
            spattack: 30,
            spdefense: 30,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}