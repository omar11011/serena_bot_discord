const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 335
        this.pokemon = 'Zangoose'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Errático
        this.peso = 40.3
        this.altura = 1.3
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Blanco
        this.evolucion = []
        this.captura = 90
        this.amistad = 70
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('ataque rápido'), 5],
            [move.get('corte furia'), 8],
            [move.get('persecución'), 12],
            [move.get('cuchillada'), 19],
            [move.get('desquite'), 22],
            [move.get('garra brutal'), 26],
            [move.get('falsotortazo'), 29],
            [move.get('tijera x'), 40],
            [move.get('a bocajarro'), 50],
        ]
        this.stats = {
            hp: 73,
            attack: 115,
            defense: 60,
            spattack: 60,
            spdefense: 60,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}