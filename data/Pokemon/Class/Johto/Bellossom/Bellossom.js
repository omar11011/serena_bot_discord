const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 182
        this.pokemon = 'Bellossom'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 5.8
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Planta,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Verde
        this.evolucion = []
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('hoja aguda'), 1],
            [move.get('megaagotar'), 1],
            [move.get('hoja mágica'), 1],
            [move.get('tormenta floral'), 49],
            [move.get('rayo solar'), 55],
            [move.get('danza pétalo'), 59],
            [move.get('lluevehojas'), 69],
        ]
        this.stats = {
            hp: 75,
            attack: 80,
            defense: 95,
            spattack: 90,
            spdefense: 100,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}