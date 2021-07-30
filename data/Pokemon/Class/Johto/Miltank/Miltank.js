const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 241
        this.pokemon = 'Miltank'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 75.5
        this.altura = 1.2
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0
        this.probHembra = 1
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Rosa
        this.evolucion = []
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('pisotón'), 8],
            [move.get('desenrollar'), 19],
            [move.get('golpe cuerpo'), 24],
            [move.get('cabezazo zen'), 29],
            [move.get('giro bola'), 41],
            [move.get('espabila'), 50],
        ]
        this.stats = {
            hp: 95,
            attack: 80,
            defense: 105,
            spattack: 40,
            spdefense: 70,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}