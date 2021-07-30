const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 703
        this.pokemon = 'Carbink'
        this.region = Entidades.Region.Kalos
        this.tipo = [
            Entidades.Tipo.Roca,
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 5.7
        this.altura = 0.3
        this.grupoHuevo = [
            Entidades.Huevo.Hada,
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Gris
        this.evolucion = []
        this.captura = 60
        this.amistad = 70
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('lanzarrocas'), 5],
            [move.get('antiaéreo'), 12],
            [move.get('poder pasado'), 31],
            [move.get('azote'), 35],
            [move.get('joya de luz'), 46],
            [move.get('roca afilada'), 49],
            [move.get('fuerza lunar'), 50],
        ]
        this.stats = {
            hp: 50,
            attack: 50,
            defense: 150,
            spattack: 50,
            spdefense: 150,
            speed: 50,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}