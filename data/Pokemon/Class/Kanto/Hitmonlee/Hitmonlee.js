const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 106
        this.pokemon = 'Hitmonlee'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Lucha,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 49.8
        this.altura = 1.5
        this.grupoHuevo = [
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 1
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Ciudad
        this.color = Entidades.Color.Marrón
        this.evolucion = []
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('doble patada'), 1],
            [move.get('desquite'), 1],
            [move.get('patada giro'), 9],
            [move.get('patada salto'), 13],
            [move.get('demolición'), 17],
            [move.get('amago'), 25],
            [move.get('patada salto alta'), 29],
            [move.get('patada ígnea'), 45],
            [move.get('mega patada'), 53],
            [move.get('inversión'), 57],
            [move.get('a bocajarro'), 61],
        ]
        this.stats = {
            hp: 50,
            attack: 120,
            defense: 53,
            spattack: 35,
            spdefense: 110,
            speed: 87,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}