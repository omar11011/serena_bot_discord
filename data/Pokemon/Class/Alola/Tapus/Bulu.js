const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 787
        this.pokemon = 'Tapu Bulu'
        this.region = Entidades.Region.Alola
        this.categoria = Entidades.Categoria.Legendario
        this.tipo = [
            Entidades.Tipo.Planta,
            Entidades.Tipo.Hada,
        ]
        this.crecimiento = Entidades.Crecimiento.Lento
        this.peso = 18.6
        this.altura = 1.2
        this.grupoHuevo = [
            Entidades.Huevo.Desconocido,
        ]
        this.probMacho = 0
        this.probHembra = 0
        this.color = Entidades.Color.Rojo
        this.evolucion = []
        this.captura = 3
        this.amistad = 70
        this.movimientos = [
            [move.get('follaje'), 1],
            [move.get('cornada'), 8],
            [move.get('gigadrenado'), 14],
            [move.get('asta drenaje'), 32],
            [move.get('furia natural'), 43],
            [move.get('cabezazo zen'), 48],
            [move.get('mega cuerno'), 53],
            [move.get('cabezazo'), 58],
            [move.get('mazazo'), 62],
            [move.get('fuerza bruta'), 67],
        ]
        this.stats = {
            hp: 70,
            attack: 130,
            defense: 115,
            spattack: 85,
            spdefense: 95,
            speed: 75,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}