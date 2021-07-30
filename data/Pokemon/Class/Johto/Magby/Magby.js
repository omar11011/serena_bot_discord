const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 240
        this.pokemon = 'Magby'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Fuego,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 21.4
        this.altura = 0.7
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0.75
        this.probHembra = 0.25
        this.habitat = Entidades.Habitat.Montaña
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Magmar', 30),
        ]
        this.captura = 45
        this.amistad = 70
        this.movimientos = [
            [move.get('polución'), 1],
            [move.get('ascuas'), 5],
            [move.get('finta'), 12],
            [move.get('giro fuego'), 15],
            [move.get('niebla clara'), 19],
            [move.get('pirotecnia'), 22],
            [move.get('puño fuego'), 29],
            [move.get('humareda'), 33],
            [move.get('lanzallamas'), 40],
            [move.get('llamarada'), 43],
        ]
        this.stats = {
            hp: 45,
            attack: 75,
            defense: 37,
            spattack: 70,
            spdefense: 55,
            speed: 83,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}