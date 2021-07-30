const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 788
        this.pokemon = 'Tapu Fini'
        this.region = Entidades.Region.Alola
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Agua,
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 21.2
        this.altura = 1.3
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Morado
        this.evolucion = []
        this.captura = 3
        this.amistad = 70
        this.movimientos = [
            [move.get('pistola agua'), 1],
            [move.get('hidropulso'), 8],
            [move.get('torbellino'), 14],
            [move.get('salmuera'), 32],
            [move.get('furia natural'), 43],
            [move.get('agua lodosa'), 48],
            [move.get('hidrobomba'), 58],
            [move.get('fuerza lunar'), 60],
        ]
        this.stats = {
            hp: 70,
            attack: 75,
            defense: 115,
            spattack: 95,
            spdefense: 130,
            speed: 85,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}