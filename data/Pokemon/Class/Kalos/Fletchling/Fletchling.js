const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 661
        this.pokemon = 'Fletchling'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Normal,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 1.7
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Volador,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Fletchinder', 17),
        ]
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('ataque rápido'), 9],
            [move.get('picotazo'), 10],
            [move.get('azote'), 16],
            [move.get('viento cortante'), 25],
            [move.get('don natural'), 29],
            [move.get('nitrocarga'), 34],
            [move.get('acróbata'), 39],
            [move.get('ala de acero'), 48],
        ]
        this.stats = {
            hp: 45,
            attack: 50,
            defense: 43,
            spattack: 40,
            spdefense: 38,
            speed: 62,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}