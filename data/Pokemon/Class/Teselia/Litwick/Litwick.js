const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 607
        this.pokemon = 'Litwick'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Fantasma,
            Entidades.Tipo.Fuego,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 3.1
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Amorfo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Blanco
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Lampent', 41),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('ascuas'), 1],
            [move.get('impresionar'), 1],
            [move.get('polución'), 5],
            [move.get('giro fuego'), 7],
            [move.get('tinieblas'), 13],
            [move.get('pirotecnia'), 20],
            [move.get('infortunio'), 28],
            [move.get('infierno'), 38],
            [move.get('bola sombra'), 49],
            [move.get('sofoco'), 61],
        ]
        this.stats = {
            hp: 50,
            attack: 30,
            defense: 55,
            spattack: 65,
            spdefense: 55,
            speed: 20,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}