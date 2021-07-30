const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 775
        this.pokemon = 'Komala'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 19.9
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Azul
        this.evolucion = []
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('desenrollar'), 1],
            [move.get('escupir'), 6],
            [move.get('giro rápido'), 11],
            [move.get('atizar'), 21],
            [move.get('azote'), 26],
            [move.get('golpe bajo'), 31],
            [move.get('mazazo'), 41],
            [move.get('golpe'), 46],
        ]
        this.stats = {
            hp: 65,
            attack: 115,
            defense: 65,
            spattack: 75,
            spdefense: 95,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}