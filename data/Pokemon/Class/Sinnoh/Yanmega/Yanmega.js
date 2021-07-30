const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 469
        this.pokemon = 'Yanmega'
        this.region = Entidades.Region.Sinnoh
        this.tipo = [
            Entidades.Tipo.Bicho,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 51.5
        this.altura = 1.9
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Verde
        this.evolucion = []
        this.captura = 30
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('tajo umbrío'), 1],
            [move.get('picadura'), 1],
            [move.get('ataque rápido'), 6],
            [move.get('bomba sónica'), 14],
            [move.get('alboroto'), 27],
            [move.get('persecución'), 30],
            [move.get('poder pasado'), 33],
            [move.get('amago'), 38],
            [move.get('cuchillada'), 43],
            [move.get('tajo aéreo'), 54],
            [move.get('zumbido'), 57],
        ]
        this.stats = {
            hp: 86,
            attack: 76,
            defense: 86,
            spattack: 116,
            spdefense: 56,
            speed: 95,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}