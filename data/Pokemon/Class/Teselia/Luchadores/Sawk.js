const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 539
        this.pokemon = 'Sawk'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Lucha,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 51
        this.altura = 1.4
        this.grupoHuevo = [
            Entidades.Huevo.Humanoide,
        ]
        this.probMacho = 1
        this.probHembra = 0
        this.color = Entidades.Color.Azul
        this.evolucion = []
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('atadura'), 1],
            [move.get('doble patada'), 13],
            [move.get('contraataque'), 21],
            [move.get('golpe kárate'), 25],
            [move.get('demolición'), 29],
            [move.get('represalia'), 37],
            [move.get('a bocajarro'), 49],
            [move.get('inversión'), 53],
        ]
        this.stats = {
            hp: 75,
            attack: 125,
            defense: 75,
            spattack: 30,
            spdefense: 75,
            speed: 80,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}