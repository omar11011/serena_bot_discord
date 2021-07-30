const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 246
        this.pokemon = 'Larvitar'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Roca,
            Entidades.Tipo.Tierra,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 72
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Monstruo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Montaña
        this.color = Entidades.Color.Verde
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Pupitar', 30),
        ]
        this.captura = 45
        this.amistad = 35
        this.movimientos = [
            [move.get('mordisco'), 1],
            [move.get('guardia baja'), 14],
            [move.get('avalancha'), 19],
            [move.get('golpe'), 28],
            [move.get('pulso umbrío'), 32],
            [move.get('vendetta'), 37],
            [move.get('triturar'), 41],
            [move.get('terremoto'), 46],
            [move.get('roca afilada'), 50],
            [move.get('hiperrayo'), 55],
        ]
        this.stats = {
            hp: 50,
            attack: 64,
            defense: 50,
            spattack: 45,
            spdefense: 50,
            speed: 41,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}