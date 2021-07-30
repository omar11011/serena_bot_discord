const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 215
        this.pokemon = 'Sneasel'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Siniestro,
            Entidades.Tipo.Hielo,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 28
        this.altura = 0.9
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Negro
        this.evolucion = [
            new Entidades.Evolucion.Item('Weavile', item.get('garra afilada'))
        ]
        this.captura = 60
        this.amistad = 35
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('ataque rápido'), 8],
            [move.get('finta'), 10],
            [move.get('viento hielo'), 14],
            [move.get('golpes furia'), 16],
            [move.get('garra metal'), 22],
            [move.get('paliza'), 28],
            [move.get('cuchillada'), 35],
            [move.get('castigo'), 44],
            [move.get('canto helado'), 47],
        ]
        this.stats = {
            hp: 55,
            attack: 95,
            defense: 55,
            spattack: 35,
            spdefense: 75,
            speed: 115,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}