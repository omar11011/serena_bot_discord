const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 888
        this.pokemon = 'Zacian'
        this.region = Entidades.Region.Galar
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 110
        this.altura = 2.8
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Azul
        this.evolucion = [
            new Entidades.Evolucion.Temporal('Zacian Espada Suprema', item.get('espada oxidada')),
        ]
        this.captura = 10
        this.amistad = 0
        this.movimientos = [
            [move.get('garra metal'), 1],
            [move.get('ataque rápido'), 1],
            [move.get('mordisco'), 1],
            [move.get('cuchillada'), 11],
            [move.get('cabeza de hierro'), 33],
            [move.get('espada santa'), 35],
            [move.get('triturar'), 55],
            [move.get('fuerza lunar'), 66],
            [move.get('a bocajarro'), 77],
            [move.get('giga impacto'), 88],
        ]
        this.stats = {
            hp: 92,
            attack: 130,
            defense: 115,
            spattack: 80,
            spdefense: 115,
            speed: 138,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}