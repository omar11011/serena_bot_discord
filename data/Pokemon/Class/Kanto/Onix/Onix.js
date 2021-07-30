const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 95
        this.pokemon = 'Onix'
        this.region = Entidades.Region.Kanto
        this.tipo = [
            Entidades.Tipo.Roca,
            Entidades.Tipo.Tierra,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 210
        this.altura = 8.8
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Caverna
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Intercambio('Steelix', item.get('revestimiento metálico')),
        ]
        this.captura = 45
        this.amistad = 50
        this.movimientos = [
            [move.get('placaje'), 1],
            [move.get('atadura'), 1],
            [move.get('lanzarrocas'), 7],
            [move.get('tumba rocas'), 10],
            [move.get('giro bola'), 20],
            [move.get('antiaéreo'), 22],
            [move.get('dragoaliento'), 25],
            [move.get('atizar'), 28],
            [move.get('avalancha'), 34],
            [move.get('bucle arena'), 37],
            [move.get('cola férrea'), 40],
            [move.get('excavar'), 43],
            [move.get('roca afilada'), 46],
            [move.get('doble filo'), 49],
        ]
        this.stats = {
            hp: 35,
            attack: 45,
            defense: 160,
            spattack: 30,
            spdefense: 45,
            speed: 70,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}