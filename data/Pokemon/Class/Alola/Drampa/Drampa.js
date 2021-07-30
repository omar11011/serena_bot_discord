const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 780
        this.pokemon = 'Drampa'
        this.region = Entidades.Region.Alola
        this.tipo = [
            Entidades.Tipo.Normal,
            Entidades.Tipo.Dragón,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 185
        this.altura = 3
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
            Entidades.Huevo.Dragón,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Blanco
        this.evolucion = []
        this.captura = 70
        this.amistad = 50
        this.movimientos = [
            [move.get('eco voz'), 1],
            [move.get('ciclón'), 5],
            [move.get('furia dragón'), 21],
            [move.get('don natural'), 25],
            [move.get('dragoaliento'), 29],
            [move.get('paranormal'), 37],
            [move.get('pulso dragón'), 41],
            [move.get('vuelo'), 45],
            [move.get('vozarrón'), 49],
            [move.get('enfado'), 53],
        ]
        this.stats = {
            hp: 78,
            attack: 60,
            defense: 85,
            spattack: 135,
            spdefense: 91,
            speed: 36,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}