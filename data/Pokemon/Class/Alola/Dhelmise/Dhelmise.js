const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 781
        this.pokemon = 'Dhelmise'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Fantasma,
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 210
        this.altura = 3.9
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Verde
        this.evolucion = []
        this.captura = 25
        this.amistad = 50
        this.movimientos = [
            [move.get('abosorber'), 1],
            [move.get('giro rápido'), 1],
            [move.get('impresionar'), 1],
            [move.get('megaagotar'), 5],
            [move.get('constricción'), 9],
            [move.get('giro bola'), 14],
            [move.get('gigadrenado'), 23],
            [move.get('torbellino'), 27],
            [move.get('anclaje'), 32],
            [move.get('bola sombra'), 36],
            [move.get('energibola'), 41],
            [move.get('atizar'), 45],
            [move.get('cuerpo pesado'), 50],
            [move.get('golpe fantasma'), 54],
            [move.get('latigazo'), 59],
        ]
        this.stats = {
            hp: 70,
            attack: 131,
            defense: 100,
            spattack: 86,
            spdefense: 90,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}