const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 852
        this.pokemon = 'Clobbopus'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Lucha,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 4
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Agua1,
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Marrón
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Grapploct', 35),
        ]
        this.captura = 180
        this.amistad = 50
        this.movimientos = [
            [move.get('golpe roca'), 1],
            [move.get('amago'), 5],
            [move.get('atadura'), 10],
            [move.get('demolición'), 20],
            [move.get('sumisión'), 30],
            [move.get('inversión'), 40],
            [move.get('fuerza bruta'), 45],
        ]
        this.stats = {
            hp: 50,
            attack: 68,
            defense: 60,
            spattack: 50,
            spdefense: 50,
            speed: 32,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}