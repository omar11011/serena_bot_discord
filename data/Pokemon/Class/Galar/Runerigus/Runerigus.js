const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 867
        this.pokemon = 'Runerigus'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Tierra,
            Entidades.Tipo.Fantasma,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 66.6
        this.altura = 1.6
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
            Entidades.Huevo.Amorfo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Gris
        this.evolucion = []
        this.captura = 90
        this.amistad = 50
        this.movimientos = [
            [move.get('impresionar'), 1],
            [move.get('tinieblas'), 1],
            [move.get('giro vil'), 16],
            [move.get('infortunio'), 24],
            [move.get('atizar'), 32],
            [move.get('garra umbría'), 34],
            [move.get('bola sombra'), 44],
            [move.get('terremoto'), 50],
        ]
        this.stats = {
            hp: 58,
            attack: 95,
            defense: 145,
            spattack: 50,
            spdefense: 105,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}