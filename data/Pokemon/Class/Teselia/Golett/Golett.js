const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 622
        this.pokemon = 'Golett'
        this.region = Entidades.Region.Teselia
        this.tipo = [
            Entidades.Tipo.Tierra,
            Entidades.Tipo.Fantasma,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 92
        this.altura = 1
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Golurk', 43),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('destructor'), 1],
            [move.get('impresionar'), 1],
            [move.get('bofetón lodo'), 5],
            [move.get('desenrollar'), 9],
            [move.get('puño sombra'), 13],
            [move.get('mega puño'), 21],
            [move.get('magnitud'), 25],
            [move.get('puño dinámico'), 30],
            [move.get('tinieblas'), 35],
            [move.get('terremoto'), 45],
            [move.get('machada'), 50],
            [move.get('puño certero'), 55],
        ]
        this.stats = {
            hp: 59,
            attack: 74,
            defense: 50,
            spattack: 35,
            spdefense: 50,
            speed: 35,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}