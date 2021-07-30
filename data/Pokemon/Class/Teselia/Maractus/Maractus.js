const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 556
        this.pokemon = 'Maractus'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 28
        this.altura = 1
        this.grupoHuevo = [
            Entidades.Huevo.Planta,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Verde
        this.evolucion = []
        this.captura = 255
        this.amistad = 50
        this.movimientos = [
            [move.get('picotazo'), 1],
            [move.get('absorber'), 1],
            [move.get('pin misil'), 10],
            [move.get('megaagotar'), 13],
            [move.get('brazo pincho'), 22],
            [move.get('gigadrenado'), 26],
            [move.get('danza pétalo'), 38],
            [move.get('golpe bajo'), 42],
            [move.get('tormenta floral'), 48],
            [move.get('rayo solar'), 50],
        ]
        this.stats = {
            hp: 75,
            attack: 86,
            defense: 67,
            spattack: 106,
            spdefense: 67,
            speed: 60,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}