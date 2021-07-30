const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 293
        this.pokemon = 'Whismur'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Normal,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 16.3
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Caverna
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Loudred', 20),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('eco voz'), 4],
            [move.get('impresionar'), 8],
            [move.get('pisotón'), 22],
            [move.get('alboroto'), 25],
            [move.get('vozarrón'), 39],
            [move.get('sincorruido'), 43],
        ]
        this.stats = {
            hp: 64,
            attack: 51,
            defense: 23,
            spattack: 51,
            spdefense: 23,
            speed: 28,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}