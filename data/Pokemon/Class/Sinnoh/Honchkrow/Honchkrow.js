const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 430
        this.pokemon = 'Honchkrow'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Siniestro,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 27.3
        this.altura = 0.9
        this.grupoHuevo = [
            Entidades.Huevo.Volador,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Negro
        this.evolucion = []
        this.captura = 30
        this.amistad = 35
        this.movimientos = [
            [move.get('golpe bajo'), 1],
            [move.get('impresionar'), 1],
            [move.get('persecución'), 1],
            [move.get('ataque ala'), 1],
            [move.get('juego sucio'), 45],
            [move.get('tajo umbrío'), 55],
            [move.get('pulso umbrío'), 75],
        ]
        this.stats = {
            hp: 100,
            attack: 125,
            defense: 52,
            spattack: 105,
            spdefense: 52,
            speed: 71,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}