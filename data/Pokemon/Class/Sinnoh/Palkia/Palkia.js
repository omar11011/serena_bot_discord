const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 484
        this.pokemon = 'Palkia'
        this.region = Entidades.Region.Sinnoh
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Dragón,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 336
        this.altura = 4.2
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Morado
        this.evolucion = []
        this.captura = 3
        this.amistad = 0
        this.movimientos = [
            [move.get('dragoaliento'), 1],
            [move.get('hidropulso'), 6],
            [move.get('poder pasado'), 10],
            [move.get('cuchillada'), 15],
            [move.get('joya de luz'), 19],
            [move.get('acua cola'), 24],
            [move.get('garra dragón'), 28],
            [move.get('tierra viva'), 33],
            [move.get('esfera aural'), 37],
            [move.get('cola férrea'), 42],
            [move.get('corte vacío'), 46],
            [move.get('hidrobomba'), 50],
        ]
        this.stats = {
            hp: 90,
            attack: 120,
            defense: 100,
            spattack: 150,
            spdefense: 120,
            speed: 100,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}