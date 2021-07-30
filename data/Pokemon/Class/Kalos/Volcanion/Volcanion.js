const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 721
        this.pokemon = 'Volcanion'
        this.region = Entidades.Region.Kalos
        this.categoria = Entidades.Categoria.Mítico
        this.tipo = [
            Entidades.Tipo.Fuego,
            Entidades.Tipo.Agua,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 195
        this.altura = 1.7
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Marrón
        this.evolucion = []
        this.captura = 3
        this.amistad = 100
        this.movimientos = [
            [move.get('derribo'), 1],
            [move.get('nitrocarga'), 15],
            [move.get('hidropulso'), 21],
            [move.get('pisotón'), 28],
            [move.get('escaldar'), 32],
            [move.get('meteorobola'), 42],
            [move.get('golpe cuerpo'), 46],
            [move.get('hidrobomba'), 50],
            [move.get('envite ígneo'), 58],
            [move.get('sofoco'), 65],
            [move.get('chorro de vapor'), 85],
        ]
        this.stats = {
            hp: 80,
            attack: 110,
            defense: 120,
            spattack: 130,
            spdefense: 90,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}