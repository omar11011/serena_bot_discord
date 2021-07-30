const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 478
        this.pokemon = 'Froslass'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Hielo,
            Entidades.Tipo.Fantasma,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 26.6
        this.altura = 1.3
        this.grupoHuevo = [
            Entidades.Huevo.Hada,
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0
        this.probHembra = 1
        this.color = Entidades.Color.Blanco
        this.evolucion = []
        this.captura = 75
        this.amistad = 50
        this.movimientos = [
            [move.get('nieve polvo'), 1],
            [move.get('canto helado'), 10],
            [move.get('viento hielo'), 14],
            [move.get('impresionar'), 19],
            [move.get('beso drenaje'), 23],
            [move.get('viento aciago'), 28],
            [move.get('espabila'), 37],
            [move.get('bola sombra'), 42],
            [move.get('ventisca'), 48],
        ]
        this.stats = {
            hp: 70,
            attack: 80,
            defense: 70,
            spattack: 80,
            spdefense: 70,
            speed: 110,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}