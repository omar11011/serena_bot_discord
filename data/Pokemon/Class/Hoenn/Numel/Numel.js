const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 322
        this.pokemon = 'Numel'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Fuego,
            Entidades.Tipo.Tierra,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 24
        this.altura = 0.7
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Montaña
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Camerupt', 33)
        ]
        this.captura = 255
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('ascuas'), 5],
            [move.get('magnitud'), 12],
            [move.get('pirotecnia'), 15],
            [move.get('humareda'), 22],
            [move.get('tierra viva'), 26],
            [move.get('derribo'), 31],
            [move.get('terremoto'), 40],
            [move.get('lanzallamas'), 43],
            [move.get('doble filo'), 47],
        ]
        this.stats = {
            hp: 60,
            attack: 60,
            defense: 40,
            spattack: 65,
            spdefense: 45,
            speed: 35,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}