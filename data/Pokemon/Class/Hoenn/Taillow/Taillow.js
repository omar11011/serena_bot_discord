const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 276
        this.pokemon = 'Taillow'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Normal,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 2.3
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Volador,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Swellow', 22),
        ]
        this.captura = 200
        this.amistad = 70
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('ataque rápido'), 9],
            [move.get('ataque ala'), 13],
            [move.get('golpe aéreo'), 21],
            [move.get('tajo aéreo'), 33],
            [move.get('esfuerzo'), 37],
            [move.get('pájaro osado'), 41],
            [move.get('inversión'), 45],
        ]
        this.stats = {
            hp: 40,
            attack: 55,
            defense: 30,
            spattack: 30,
            spdefense: 30,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}