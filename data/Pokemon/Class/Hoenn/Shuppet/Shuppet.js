const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 353
        this.pokemon = 'Shuppet'
        this.region = Entidades.Region.Hoenn
        this.tipo = [
            Entidades.Tipo.Fantasma,
        ]
        this.crecimiento = Entidades.Crecimiento.Rápido
        this.peso = 2.3
        this.altura = 0.6
        this.grupoHuevo = [
            Entidades.Huevo.Amorfo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Ciudad
        this.color = Entidades.Color.Negro
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Banette', 37),
        ]
        this.captura = 225
        this.amistad = 35
        this.movimientos = [
            [move.get('desarme'), 1],
            [move.get('tinieblas'), 7],
            [move.get('sombra vil'), 13],
            [move.get('finta'), 19],
            [move.get('infortunio'), 22],
            [move.get('bola sombra'), 30],
            [move.get('golpe bajo'), 38],
            [move.get('golpe fantasma'), 54],
        ]
        this.stats = {
            hp: 44,
            attack: 75,
            defense: 35,
            spattack: 63,
            spdefense: 33,
            speed: 45,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}