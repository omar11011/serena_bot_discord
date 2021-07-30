const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 562
        this.pokemon = 'Yamask'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Fantasma,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 1.5
        this.altura = 0.5
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
            Entidades.Huevo.Amorfo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Negro
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Cofagrigus', 34),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('impresionar'), 1],
            [move.get('tinieblas'), 13],
            [move.get('infortunio'), 17],
            [move.get('viento aciago'), 25],
            [move.get('bola sombra'), 37],
        ]
        this.stats = {
            hp: 38,
            attack: 30,
            defense: 85,
            spattack: 55,
            spdefense: 65,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}