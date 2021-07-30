const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 807
        this.pokemon = 'Zeraora'
        this.region = Entidades.Region.Alola
        this.categoria = Entidades.Categoria.Mítico
        this.tipo = [
            Entidades.Tipo.Eléctrico,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 44.5
        this.altura = 1.5
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Amarillo
        this.evolucion = []
        this.captura = 30
        this.amistad = 0
        this.movimientos = [
            [move.get('arañazo'), 1],
            [move.get('chispa'), 1],
            [move.get('ataque rápido'), 8],
            [move.get('golpes furia'), 12],
            [move.get('voltiocambio'), 15],
            [move.get('alarido'), 19],
            [move.get('sorpresa'), 22],
            [move.get('puño trueno'), 29],
            [move.get('cuchillada'), 33],
            [move.get('voltio cruel'), 36],
            [move.get('puños plasma'), 43],
            [move.get('a bocajarro'), 47],
            [move.get('chispazo'), 50],
        ]
        this.stats = {
            hp: 88,
            attack: 112,
            defense: 75,
            spattack: 102,
            spdefense: 80,
            speed: 143,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}