const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 865
        this.pokemon = "Sirfetch'd"
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Lucha,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 117
        this.altura = 0.8
        this.grupoHuevo = [
            Entidades.Huevo.Volador,
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Blanco
        this.evolucion = []
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('escaramuza'), 1],
            [move.get('picotazo'), 1],
            [move.get('corte furia'), 1],
            [move.get('golpe roca'), 15],
            [move.get('giro vil'), 20],
            [move.get('desarme'), 30],
            [move.get('demolición'), 40],
            [move.get('atizar'), 50],
            [move.get('hoja aguda'), 55],
            [move.get('pájaro osado'), 65],
            [move.get('asalto estelar'), 70],
        ]
        this.stats = {
            hp: 62,
            attack: 135,
            defense: 95,
            spattack: 68,
            spdefense: 82,
            speed: 65,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}