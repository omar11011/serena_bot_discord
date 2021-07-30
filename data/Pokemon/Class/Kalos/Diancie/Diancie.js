const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 719
        this.pokemon = 'Diancie'
        this.region = Entidades.Region.Kalos
        this.categoria = Entidades.Categoria.Mítico
        this.tipo = [
            Entidades.Tipo.Roca,
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 8.8
        this.altura = 0.7
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Rosa
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Diancie', item.get('diancita')),
        ]
        this.captura = 3
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('lanzarrocas'), 1],
            [move.get('antiaéreo'), 8],
            [move.get('poder pasado'), 27],
            [move.get('azote'), 31],
            [move.get('joya de luz'), 40],
            [move.get('roca afilada'), 49],
            [move.get('fuerza lunar'), 50],
            [move.get('tormenta de diamantes'), 50],
        ]
        this.stats = {
            hp: 50,
            attack: 100,
            defense: 150,
            spattack: 100,
            spdefense: 150,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}