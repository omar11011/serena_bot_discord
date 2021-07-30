const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 327
        this.pokemon = 'Spinda'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 5
        this.altura = 1.1
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Marrón
        this.evolucion = []
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('finta'), 10],
            [move.get('psicorrayo'), 14],
            [move.get('puño mareo'), 23],
            [move.get('golpe bajo'), 28],
            [move.get('alboroto'), 37],
            [move.get('doble filo'), 46],
            [move.get('azote'), 50],
            [move.get('golpe'), 55],
        ]
        this.stats = {
            hp: 60,
            attack: 60,
            defense: 60,
            spattack: 60,
            spdefense: 60,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}