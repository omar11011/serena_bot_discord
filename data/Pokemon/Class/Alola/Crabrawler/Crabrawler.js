const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 739
        this.pokemon = 'Crabrawler'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Lucha,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 7
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Agua3,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Crabominable', 25),
        ]
        this.captura = 225
        this.amistad = 50
        this.movimientos = [
            [move.get('burbuja'), 1],
            [move.get('golpe roca'), 5],
            [move.get('persecución'), 13],
            [move.get('rayo burbuja'), 17],
            [move.get('puño incremento'), 22],
            [move.get('puño mareo'), 25],
            [move.get('vendetta'), 29],
            [move.get('inversión'), 33],
            [move.get('martillazo'), 37],
            [move.get('puño dinámico'), 45],
            [move.get('a bocajarro'), 49],
        ]
        this.stats = {
            hp: 47,
            attack: 82,
            defense: 57,
            spattack: 42,
            spdefense: 47,
            speed: 63,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}