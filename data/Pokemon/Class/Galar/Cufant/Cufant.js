const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 878
        this.pokemon = 'Cufant'
        this.region = Entidades.Region.Galar
        this.tipo = [
            Entidades.Tipo.Acero,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 100
        this.altura = 1.2
        this.grupoHuevo = [
            Entidades.Huevo.Campo,
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.color = Entidades.Color.Amarillo
        this.evolucion = [
            new Entidades.Evolucion.Nivel('Copperajah', 34),
        ]
        this.captura = 190
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('rodar'), 5],
            [move.get('golpe roca'), 10],
            [move.get('terratemblor'), 15],
            [move.get('pisotón'), 20],
            [move.get('excavar'), 30],
            [move.get('fuerza'), 35],
            [move.get('cabeza de hierro'), 40],
            [move.get('carantoña'), 45],
            [move.get('fuerza equina'), 50],
            [move.get('fuerza bruta'), 55],
        ]
        this.stats = {
            hp: 72,
            attack: 80,
            defense: 49,
            spattack: 40,
            spdefense: 49,
            speed: 40,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}