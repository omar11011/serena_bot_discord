const Base = require('../../../Base')
const Entidades = require('../../../../index')
const move = require('../../../../../util/Movement')
const item = require('../../../../../util/Item')

class Pokemon extends Base {
    constructor() {
        super()

        this.id = 208
        this.pokemon = 'Steelix'
        this.region = Entidades.Region.Johto
        this.tipo = [
            Entidades.Tipo.Acero,
            Entidades.Tipo.Tierra,
        ]
        this.crecimiento = Entidades.Crecimiento.Normal
        this.peso = 400
        this.altura = 9.2
        this.grupoHuevo = [
            Entidades.Huevo.Mineral,
        ]
        this.probMacho = 0.5
        this.probHembra = 0.5
        this.habitat = Entidades.Habitat.Caverna
        this.color = Entidades.Color.Gris
        this.evolucion = [
            new Entidades.Evolucion.Mega('Mega Steelix', item.get('steelixita'))
        ]
        this.captura = 25
        this.amistad = 50
        this.movimientos = [
            [move.get('colmillo rayo'), 1],
            [move.get('colmillo hielo'), 1],
            [move.get('colmillo ígneo'), 1],
            [move.get('placaje'), 1],
            [move.get('atadura'), 1],
            [move.get('lanzarrocas'), 7],
            [move.get('tumba rocas'), 10],
            [move.get('furia'), 13],
            [move.get('antiaéreo'), 22],
            [move.get('dragoaliento'), 25],
            [move.get('atizar'), 28],
            [move.get('avalancha'), 34],
            [move.get('triturar'), 37],
            [move.get('cola férrea'), 40],
            [move.get('excavar'), 43],
            [move.get('roca afilada'), 46],
            [move.get('doble filo'), 49],
        ]
        this.stats = {
            hp: 75,
            attack: 85,
            defense: 200,
            spattack: 55,
            spdefense: 65,
            speed: 30,
        }
    }
}

module.exports = {
    class: Pokemon,
    object: new Pokemon(),
}