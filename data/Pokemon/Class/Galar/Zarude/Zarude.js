const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 893
        this.pokemon = 'Zarude'
        this.region = Entidades.Region.Galar
        this.categoria = Entidades.Categoria.Mítico
        this.tipo = [
            Entidades.Tipo.Siniestro,
            Entidades.Tipo.Planta,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 70
        this.altura = 1.8
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Verde
        this.evolucion = []
        this.captura = 3
        this.amistad = 0
        this.movimientos = [
            [move.get('atadura'), 1],
            [move.get('arañazo'), 1],
            [move.get('látigo cepa'), 12],
            [move.get('golpes furia'), 24],
            [move.get('hierba lazo'), 34],
            [move.get('mordisco'), 42],
            [move.get('energibola'), 60],
            [move.get('machada'), 72],
            [move.get('golpe'), 78],
            [move.get('latigazo'), 84],
        ]
        this.stats = {
            hp: 105,
            attack: 120,
            defense: 105,
            spattack: 70,
            spdefense: 95,
            speed: 105,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}