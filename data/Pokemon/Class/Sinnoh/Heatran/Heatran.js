const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 485
        this.pokemon = 'Heatran'
        this.region = Entidades.Region.Sinnoh
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Fuego,
            Entidades.Tipo.Acero,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 430
        this.altura = 1.7
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Marrón
        this.evolucion = []
        this.captura = 3
        this.amistad = 100
        this.movimientos = [
            [move.get('poder pasado'), 1],
            [move.get('colmillo ígneo'), 17],
            [move.get('triturar'), 33],
            [move.get('humareda'), 49],
            [move.get('giro fuego'), 57],
            [move.get('cabeza de hierro'), 65],
            [move.get('tierra viva'), 73],
            [move.get('onda ígnea'), 81],
            [move.get('roca afilada'), 88],
            [move.get('lluvia ígnea'), 96],
        ]
        this.stats = {
            hp: 91,
            attack: 90,
            defense: 106,
            spattack: 130,
            spdefense: 106,
            speed: 77,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}