const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 442
        this.pokemon = 'Spiritomb'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Fantasma,
            Entidades.Tipo.Siniestro,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 108
        this.altura = 1
        this.grupoHuevo = [
            Entidades.Huevo.Amorfo,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Morado
        this.evolucion = []
        this.captura = 100
        this.amistad = 70
        this.movimientos = [
            [move.get('persecución'), 1],
            [move.get('sombra vil'), 1],
            [move.get('finta'), 7],
            [move.get('come sueños'), 19],
            [move.get('viento aciago'), 25],
            [move.get('golpe bajo'), 31],
            [move.get('pulso umbrío'), 49],
        ]
        this.stats = {
            hp: 50,
            attack: 92,
            defense: 108,
            spattack: 92,
            spdefense: 108,
            speed: 35,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}