const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 207
        this.pokemon = 'Gligar'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Tierra,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Parabólico
        this.peso = 64.8
        this.altura = 1.1
        this.grupoHuevo = [
            Entidades.Huevo.Bicho,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Montaña
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Item('Gliscor', item.get('colmillo agudo'))
        ]
        this.captura = 60
        this.amistad = 70
        this.movimientos = [
            [move.get('picotazo venenoso'), 1],
            [move.get('desarme'), 1],
            [move.get('ataque rápido'), 1],
            [move.get('corte furia'), 1],
            [move.get('furia'), 1],
            [move.get('acróbata'), 1],
            [move.get('cuchillada'), 1],
            [move.get('tijera x'), 1],
            [move.get('gancho alto'), 1],
            [move.get('guillotina'), 1],
        ]
        this.stats = {
            hp: 65,
            attack: 75,
            defense: 105,
            spattack: 35,
            spdefense: 65,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}