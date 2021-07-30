const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 854
        this.pokemon = 'Sinistea'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Fantasma,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 0.2
        this.altura = 0.1
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
            Entidades.Huevo.Amorfo,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Morado
        this.evolucion = [
            new Entidades.Evolucion.Item('Polteageist', item.get('tetera rota')),
        ]
        this.captura = 120
        this.amistad = 50
        this.movimientos = [
            [move.get('impresionar'), 1],
            [move.get('megaagotar'), 12],
            [move.get('alarido'), 12],
            [move.get('golpe bajo'), 24],
            [move.get('gigadrenado'), 36],
        ]
        this.stats = {
            hp: 40,
            attack: 45,
            defense: 45,
            spattack: 74,
            spdefense: 54,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}