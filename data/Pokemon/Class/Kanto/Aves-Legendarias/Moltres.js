const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 146
        this.pokemon = 'Moltres'
        this.region = Entidades.Region.Kanto
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Fuego,
            Entidades.Tipo.Volador,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 60
        this.altura = 2
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.habitat = Entidades.Habitat.Raro
        this.color = Entidades.Color.Amarillo
        this.evolucion = []
        this.captura = 3
        this.amistad = 35
        this.movimientos = [
            [move.get('ataque ala'), 1],
            [move.get('ascuas'), 1],
            [move.get('giro fuego'), 8],
            [move.get('poder pasado'), 29],
            [move.get('lanzallamas'), 36],
            [move.get('tajo aéreo'), 50],
            [move.get('onda ígnea'), 64],
            [move.get('rayo solar'), 71],
            [move.get('ataque aéreo'), 78],
            [move.get('vendaval'), 92],
            [move.get('llama final'), 99],
        ]
        this.stats = {
            hp: 90,
            attack: 100,
            defense: 90,
            spattack: 125,
            spdefense: 85,
            speed: 90,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}