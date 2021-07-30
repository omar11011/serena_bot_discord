const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 66
        this.pokemon = 'Machop'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Lucha,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 19.5
        this.altura = 0.8
        this.grupoHuevo = [
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 0.75
        this.probHembra = 0.25
        this.habitat = Entidades.Habitat.Montaña
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Machoke', 28),
        ]
        this.captura = 180
        this.amistad = 50
        this.movimientos = [
            [move.get('patada baja'), 1],
            [move.get('golpe kárate'), 7],
            [move.get('puntapié'), 13],
            [move.get('desquite'), 19],
            [move.get('desarme'), 21],
            [move.get('tiro vital'), 25],
            [move.get('espabila'), 27],
            [move.get('golpe bis'), 31],
            [move.get('sumisión'), 33],
            [move.get('tajo cruzado'), 39],
            [move.get('puño dinámico'), 45],
        ]
        this.stats = {
            hp: 70,
            attack: 80,
            defense: 50,
            spattack: 35,
            spdefense: 35,
            speed: 35,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}