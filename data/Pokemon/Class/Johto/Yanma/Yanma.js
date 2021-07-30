const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 193
        this.pokemon = 'Yanma'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 38
        this.altura = 1.2
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Bosque
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Movimiento('Yanmega', move.get('poder pasado'))
        ]
        this.captura = 75
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('ataque rápido'), 6],
            [move.get('bomba sónica'), 14],
            [move.get('alboroto'), 27],
            [move.get('persecución'), 30],
            [move.get('poder pasado'), 33],
            [move.get('rapidez'), 37],
            [move.get('ataque ala'), 43],
            [move.get('tajo aéreo'), 54],
            [move.get('zumbido'), 57],
        ]
        this.stats = {
            hp: 65,
            attack: 65,
            defense: 45,
            spattack: 75,
            spdefense: 45,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}