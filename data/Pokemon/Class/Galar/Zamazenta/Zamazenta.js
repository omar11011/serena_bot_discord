const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 889
        this.pokemon = 'Zamazenta'
        this.region = Entidades.Region.Galar
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Lucha,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 210
        this.altura = 2.9
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Rojo
        this.evolucion = [
            new Entidades.Evolucion.Temporal('Zamazenta Escudo Supremo', item.get('escudo oxidado')),
        ]
        this.captura = 10
        this.amistad = 0
        this.movimientos = [
            [move.get('garra metal'), 1],
            [move.get('ataque rápido'), 1],
            [move.get('mordisco'), 1],
            [move.get('cuchillada'), 11],
            [move.get('cabeza de hierro'), 33],
            [move.get('triturar'), 55],
            [move.get('fuerza lunar'), 66],
            [move.get('represión metálica'), 74],
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