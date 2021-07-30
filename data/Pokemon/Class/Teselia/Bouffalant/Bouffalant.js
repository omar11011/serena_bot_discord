const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 626
        this.pokemon = 'Bouffalant'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 94.6
        this.altura = 1.6
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Marrón
        this.evolucion = []
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('persecución'), 1],
            [move.get('furia'), 6],
            [move.get('ataque furia'), 11],
            [move.get('cornada'), 16],
            [move.get('desquite'), 26],
            [move.get('ariete'), 31],
            [move.get('mega cuerno'), 41],
            [move.get('inversión'), 46],
            [move.get('golpe'), 50],
            [move.get('giga impacto'), 61],
        ]
        this.stats = {
            hp: 95,
            attack: 110,
            defense: 95,
            spattack: 40,
            spdefense: 95,
            speed: 55,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}