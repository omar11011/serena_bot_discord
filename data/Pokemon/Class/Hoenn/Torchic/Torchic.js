const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 255
        this.pokemon = 'Torchic'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Fuego,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 2.5
        this.altura = 0.4
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.875
        this.probHembra = 0.125
        this.habitat = Entidades.Habitat.Pradera
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Combusken', 16),
        ]
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('ascuas'), 5],
            [move.get('picotazo'), 14],
            [move.get('giro fuego'), 19],
            [move.get('ataque rápido'), 23],
            [move.get('pirotecnia'), 28],
            [move.get('cuchillada'), 37],
            [move.get('lanzallamas'), 46],
        ]
        this.stats = {
            hp: 45,
            attack: 60,
            defense: 40,
            spattack: 70,
            spdefense: 50,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}